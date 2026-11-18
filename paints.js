// Special paints: glitter, pearl and galaxy textures, generated in code (no image files).
// Each paint is a seamless 256x256 tile. The app uses it as a canvas pattern for the brush
// and copies its pixels for the bucket fill, so brush and fill line up perfectly.
(function () {
  const T = 256; // tile size, power of two so (x & 255) wraps

  // ---------- helpers ----------
  function rng(seedStr) {
    let a = 0;
    for (const ch of seedStr) a = (Math.imul(a, 31) + ch.charCodeAt(0)) | 0;
    return () => {
      a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const hexToRgb = hex => { const n = parseInt(hex.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
  function hslToRgb(h, s, l) {
    h = ((h % 360) + 360) % 360 / 360;
    const f = n => { const k = (n + h * 12) % 12, a = s * Math.min(l, 1 - l); return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1)); };
    return [f(0) * 255, f(8) * 255, f(4) * 255];
  }
  function rgbToHue([r, g, b]) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
    if (!d) return 0;
    let h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    return h * 60;
  }
  const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  const WHITE = [255, 255, 255];
  const TAU = Math.PI * 2;

  function newTile() {
    const c = document.createElement('canvas');
    c.width = c.height = T;
    return c;
  }
  // draw something at all wrap-around offsets so the tile stays seamless
  function wrapDraw(fn, x, y, r) {
    for (const dx of [-T, 0, T]) for (const dy of [-T, 0, T]) {
      if (x + dx + r < 0 || x + dx - r > T || y + dy + r < 0 || y + dy - r > T) continue;
      fn(x + dx, y + dy);
    }
  }
  function star(g, x, y, s, alpha) {
    g.save();
    const glow = g.createRadialGradient(x, y, 0, x, y, s * 1.2);
    glow.addColorStop(0, `rgba(255,255,255,${alpha * .9})`);
    glow.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = glow; g.beginPath(); g.arc(x, y, s * 1.2, 0, TAU); g.fill();
    g.fillStyle = `rgba(255,255,255,${alpha})`;
    g.beginPath();
    g.moveTo(x, y - s); g.lineTo(x + s * .18, y - s * .18); g.lineTo(x + s, y); g.lineTo(x + s * .18, y + s * .18);
    g.lineTo(x, y + s); g.lineTo(x - s * .18, y + s * .18); g.lineTo(x - s, y); g.lineTo(x - s * .18, y - s * .18);
    g.closePath(); g.fill();
    g.restore();
  }

  // ---------- generators ----------
  // baseAt(x, y) -> [r,g,b] gives the underlying color (solid, rainbow or galaxy clouds)
  function glitter(key, baseAt, opts = {}) {
    const rand = rng(key);
    const c = newTile(), g = c.getContext('2d');
    const img = g.createImageData(T, T), d = img.data;
    const cell = 2;
    for (let cy = 0; cy < T; cy += cell) for (let cx = 0; cx < T; cx += cell) {
      const fleck = rand();
      let f = 0.62 + rand() * 0.7;
      let col = baseAt(cx, cy);
      col = [col[0] * f, col[1] * f, col[2] * f];
      if (fleck > 0.93) col = mix(col, WHITE, 0.55 + rand() * 0.4);      // bright fleck
      else if (fleck < 0.05) col = mix(col, [0, 0, 0], 0.35);           // dark fleck = depth
      for (let y = cy; y < cy + cell; y++) for (let x = cx; x < cx + cell; x++) {
        const i = (y * T + x) * 4;
        d[i] = col[0]; d[i + 1] = col[1]; d[i + 2] = col[2]; d[i + 3] = 255;
      }
    }
    g.putImageData(img, 0, 0);
    // soft bokeh blobs
    const bokeh = opts.bokeh ?? 26;
    for (let k = 0; k < bokeh; k++) {
      const x = rand() * T, y = rand() * T, r = 5 + rand() * 16, a = .18 + rand() * .3;
      const base = baseAt(x | 0, y | 0), light = mix(base, WHITE, .55);
      wrapDraw((px, py) => {
        const grad = g.createRadialGradient(px, py, 0, px, py, r);
        grad.addColorStop(0, `rgba(${light.map(v => v | 0)},${a})`);
        grad.addColorStop(.7, `rgba(${light.map(v => v | 0)},${a * .6})`);
        grad.addColorStop(1, `rgba(${light.map(v => v | 0)},0)`);
        g.fillStyle = grad; g.beginPath(); g.arc(px, py, r, 0, TAU); g.fill();
      }, x, y, r);
    }
    // tiny sparkles and a few twinkle stars
    for (let k = 0; k < (opts.dots ?? 40); k++) {
      const x = rand() * T, y = rand() * T, r = .6 + rand() * 1.4;
      wrapDraw((px, py) => { g.fillStyle = `rgba(255,255,255,${.6 + rand() * .4})`; g.beginPath(); g.arc(px, py, r, 0, TAU); g.fill(); }, x, y, r);
    }
    for (let k = 0; k < (opts.stars ?? 7); k++) {
      const x = rand() * T, y = rand() * T, s = 4 + rand() * 8;
      wrapDraw((px, py) => star(g, px, py, s, .85), x, y, s * 1.3);
    }
    return c;
  }

  function pearl(key, hueAt, opts = {}) {
    const rand = rng(key);
    const c = newTile(), g = c.getContext('2d');
    const img = g.createImageData(T, T), d = img.data;
    const sat = opts.sat ?? .55, light = opts.light ?? .8;
    for (let y = 0; y < T; y++) for (let x = 0; x < T; x++) {
      const u = x / T, v = y / T;
      const base = opts.baseAt ? opts.baseAt(x, y) : null;
      const h = hueAt(x, y) + 38 * Math.sin(TAU * (u + v)) + 26 * Math.sin(TAU * (2 * u - v) + 1.3);
      let col = hslToRgb(h, sat, light);
      if (base) col = mix(base, col, .4);
      // soft wavy sheen
      const sheen = Math.pow(Math.max(0, Math.sin(TAU * (u - 2 * v) + 1.5 * Math.sin(TAU * (u + v)))), 6) * .45;
      col = mix(col, WHITE, sheen);
      const n = (rand() - .5) * 10; // faint grain so it doesn't look flat
      const i = (y * T + x) * 4;
      d[i] = col[0] + n; d[i + 1] = col[1] + n; d[i + 2] = col[2] + n; d[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    for (let k = 0; k < 14; k++) {
      const x = rand() * T, y = rand() * T, r = .6 + rand();
      wrapDraw((px, py) => { g.fillStyle = 'rgba(255,255,255,.85)'; g.beginPath(); g.arc(px, py, r, 0, TAU); g.fill(); }, x, y, r);
    }
    return c;
  }

  // ---------- palette ----------
  const solid = hex => { const c = hexToRgb(hex); return () => c; };
  const rainbowAt = (x, y) => hslToRgb(((x + y) / T) * 360, .9, .55);
  const galaxyAt = (x, y) => {
    const u = x / T, v = y / T;
    const n = Math.sin(TAU * (u + 2 * v)) + Math.sin(TAU * (3 * u - v) + 2) + .6 * Math.sin(TAU * (2 * u + 3 * v) + 4);
    const t = (n + 2.6) / 5.2;
    return t < .5 ? mix([18, 14, 60], [70, 30, 140], t * 2) : mix([70, 30, 140], [30, 70, 170], (t - .5) * 2);
  };

  const GLITTER = [
    ['red', '#e0182d'], ['orange', '#ff7a1a'], ['gold', '#d9a514'], ['yellow', '#ffe14a'],
    ['green', '#33c24d'], ['mint', '#3ee0b0'], ['turq', '#18c0e0'], ['blue', '#2a5bff'],
    ['purple', '#8a3ff0'], ['magenta', '#e02ad0'], ['pink', '#ff6fb5'], ['silver', '#c9ced8'],
  ].map(([id, hex]) => ({ key: 'g:' + id, make: () => glitter('g:' + id, solid(hex)) }))
    .concat([
      { key: 'g:rainbow', make: () => glitter('g:rainbow', rainbowAt) },
      { key: 'g:galaxy', make: () => glitter('g:galaxy', galaxyAt, { bokeh: 10, dots: 90, stars: 12 }) },
    ]);

  const PEARL = [
    ['white', 40, .35, .92], ['pink', 335, .7, .84], ['peach', 20, .8, .82], ['lemon', 52, .85, .8],
    ['mint', 150, .55, .8], ['sky', 200, .7, .82], ['lavender', 265, .6, .84], ['lilac', 290, .5, .78],
    ['coral', 8, .75, .76], ['aqua', 180, .6, .76], ['rose', 350, .45, .74], ['gold', 42, .65, .72], ['ice', 215, .4, .9],
  ].map(([id, hue, sat, light]) => ({ key: 'p:' + id, make: () => pearl('p:' + id, () => hue, { sat, light }) }))
    .concat([{ key: 'p:rainbow', make: () => pearl('p:rainbow', (x, y) => ((x + y) / T) * 360, { sat: .7, light: .78 }) }]);

  const ALL = Object.fromEntries([...GLITTER, ...PEARL].map(p => [p.key, p]));
  const cache = {};
  function tile(key) {
    if (!ALL[key]) return null;
    if (!cache[key]) {
      const canvas = ALL[key].make();
      cache[key] = { canvas, data: canvas.getContext('2d').getImageData(0, 0, T, T).data, url: null };
    }
    return cache[key];
  }
  function swatchURL(key) {
    const t = tile(key);
    if (!t.url) t.url = t.canvas.toDataURL('image/jpeg', .85);
    return t.url;
  }

  window.PAINTS = { T, GLITTER: GLITTER.map(p => p.key), PEARL: PEARL.map(p => p.key), tile, swatchURL, isSpecial: k => !!ALL[k] };
})();
