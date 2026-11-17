// Coloring pages: simple outline drawings (our own, no licensing issues).
// Shapes are drawn back-to-front with white fill so overlaps hide lines behind them.
// The app turns white into transparent, so only the black lines stay on top.
(function () {
  const wrap = body => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="800" height="800">` +
    `<rect width="400" height="400" fill="#fff"/>` +
    `<g fill="#fff" stroke="#000" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">${body}</g></svg>`;
  const eye = (x, y, r = 9) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#000"/><circle cx="${x + r * .35}" cy="${y - r * .35}" r="${r * .3}" fill="#fff" stroke="none"/>`;

  // hedgehog spikes along an arc
  function spikes() {
    const cx = 195, cy = 270, rx = 150, ry = 125, depth = 38, n = 22;
    const pts = [];
    for (let k = 0; k <= n; k++) {
      const a = Math.PI + (Math.PI * k) / n; // upper half (y grows down)
      const r = k % 2 ? 1 : (rx - depth) / rx;
      pts.push(`${(cx + Math.cos(a) * rx * r).toFixed(1)} ${(cy + Math.sin(a) * ry * (k % 2 ? 1 : (ry - depth) / ry)).toFixed(1)}`);
    }
    return `M${pts.join(' L')} Z`;
  }

  const PAGES = [
    { id: 'squirrel', name: 'Білочка', svg: wrap(`
      <path d="M205 335 C 95 345 35 265 55 185 C 70 115 150 65 195 105 C 230 140 205 195 168 182 C 152 230 182 282 220 300 Z"/>
      <path d="M95 160 C 110 130 140 115 165 125" fill="none"/>
      <path d="M80 230 C 85 200 100 185 120 180" fill="none"/>
      <ellipse cx="255" cy="285" rx="70" ry="80"/>
      <ellipse cx="272" cy="298" rx="40" ry="55"/>
      <path d="M248 140 L238 82 L280 128 Z"/>
      <path d="M292 128 L318 80 L324 140 Z"/>
      <circle cx="288" cy="175" r="52"/>
      ${eye(305, 162)}
      <circle cx="338" cy="186" r="6" fill="#000"/>
      <path d="M312 200 Q 322 210 334 200" fill="none"/>
      <circle cx="290" cy="198" r="10"/>
      <ellipse cx="302" cy="262" rx="22" ry="26"/>
      <path d="M276 252 Q 302 220 328 252 Z"/>
      <path d="M302 232 L305 220" fill="none"/>
      <ellipse cx="278" cy="262" rx="13" ry="10"/>
      <ellipse cx="326" cy="262" rx="13" ry="10"/>
      <ellipse cx="228" cy="362" rx="36" ry="15"/>
      <ellipse cx="300" cy="362" rx="36" ry="15"/>`) },

    { id: 'cat', name: 'Котик', svg: wrap(`
      <path d="M255 345 C 350 355 375 265 335 232 C 322 222 305 236 318 250 C 342 275 330 320 255 322 Z"/>
      <ellipse cx="200" cy="290" rx="82" ry="85"/>
      <ellipse cx="200" cy="305" rx="46" ry="55"/>
      <path d="M142 140 L132 68 L190 108 Z"/>
      <path d="M258 140 L268 68 L210 108 Z"/>
      <path d="M150 128 L146 92 L172 112 Z"/>
      <path d="M250 128 L254 92 L228 112 Z"/>
      <circle cx="200" cy="170" r="72"/>
      ${eye(172, 160, 11)}${eye(228, 160, 11)}
      <path d="M192 186 L208 186 L200 196 Z" fill="#000"/>
      <path d="M200 196 Q 190 212 178 204 M200 196 Q 210 212 222 204" fill="none"/>
      <path d="M160 190 L110 182 M160 198 L112 204 M240 190 L290 182 M240 198 L288 204" fill="none" stroke-width="4"/>
      <ellipse cx="168" cy="368" rx="30" ry="16"/>
      <ellipse cx="232" cy="368" rx="30" ry="16"/>`) },

    { id: 'bunny', name: 'Зайчик', svg: wrap(`
      <ellipse cx="165" cy="85" rx="24" ry="68" transform="rotate(-12 165 85)"/>
      <ellipse cx="165" cy="90" rx="11" ry="48" transform="rotate(-12 165 90)"/>
      <ellipse cx="235" cy="85" rx="24" ry="68" transform="rotate(12 235 85)"/>
      <ellipse cx="235" cy="90" rx="11" ry="48" transform="rotate(12 235 90)"/>
      <circle cx="275" cy="320" r="24"/>
      <ellipse cx="200" cy="295" rx="80" ry="80"/>
      <ellipse cx="200" cy="305" rx="45" ry="52"/>
      <circle cx="200" cy="185" r="62"/>
      ${eye(176, 175, 10)}${eye(224, 175, 10)}
      <ellipse cx="200" cy="198" rx="9" ry="6" fill="#000"/>
      <path d="M200 204 L200 214 M200 214 Q 190 222 182 214 M200 214 Q 210 222 218 214" fill="none"/>
      <circle cx="160" cy="205" r="10"/>
      <circle cx="240" cy="205" r="10"/>
      <ellipse cx="318" cy="232" rx="8" ry="22" transform="rotate(-25 318 232)"/>
      <ellipse cx="332" cy="226" rx="8" ry="24"/>
      <ellipse cx="346" cy="232" rx="8" ry="22" transform="rotate(25 346 232)"/>
      <path d="M308 252 Q 332 240 356 252 L 334 372 Z"/>
      <path d="M318 280 L332 282 M324 310 L338 312 M328 340 L336 341" fill="none" stroke-width="4"/>
      <ellipse cx="160" cy="370" rx="34" ry="16"/>
      <ellipse cx="240" cy="370" rx="34" ry="16"/>`) },

    { id: 'bear', name: 'Ведмедик', svg: wrap(`
      <circle cx="140" cy="105" r="30"/><circle cx="140" cy="105" r="14"/>
      <circle cx="260" cy="105" r="30"/><circle cx="260" cy="105" r="14"/>
      <ellipse cx="200" cy="295" rx="88" ry="85"/>
      <ellipse cx="200" cy="305" rx="52" ry="58"/>
      <circle cx="200" cy="160" r="72"/>
      <ellipse cx="200" cy="188" rx="34" ry="26"/>
      ${eye(172, 150, 10)}${eye(228, 150, 10)}
      <ellipse cx="200" cy="176" rx="12" ry="8" fill="#000"/>
      <path d="M200 184 L200 196 M200 196 Q 190 206 180 198 M200 196 Q 210 206 220 198" fill="none"/>
      <ellipse cx="118" cy="270" rx="22" ry="40" transform="rotate(25 118 270)"/>
      <ellipse cx="282" cy="270" rx="22" ry="40" transform="rotate(-25 282 270)"/>
      <ellipse cx="155" cy="365" rx="36" ry="20"/><ellipse cx="155" cy="365" rx="16" ry="9"/>
      <ellipse cx="245" cy="365" rx="36" ry="20"/><ellipse cx="245" cy="365" rx="16" ry="9"/>`) },

    { id: 'fish', name: 'Рибка', svg: wrap(`
      <path d="M290 200 L370 140 L355 200 L370 260 Z"/>
      <path d="M160 130 Q 210 70 260 135 Z"/>
      <path d="M170 268 Q 200 320 235 265 Z"/>
      <ellipse cx="190" cy="200" rx="120" ry="78"/>
      <path d="M125 135 Q 100 200 125 265" fill="none"/>
      <path d="M180 160 Q 195 175 180 190 M215 160 Q 230 175 215 190 M250 160 Q 265 175 250 190 M180 210 Q 195 225 180 240 M215 210 Q 230 225 215 240 M250 210 Q 265 225 250 240" fill="none" stroke-width="4"/>
      ${eye(100, 185, 13)}
      <path d="M78 222 Q 90 230 100 222" fill="none"/>
      <circle cx="60" cy="120" r="14"/><circle cx="80" cy="80" r="9"/><circle cx="55" cy="50" r="6"/>
      <path d="M20 380 Q 50 330 40 300 M60 385 Q 85 340 75 310 M340 385 Q 320 330 350 300" fill="none"/>`) },

    { id: 'butterfly', name: 'Метелик', svg: wrap(`
      <path d="M200 190 C 150 60 30 60 50 150 C 60 200 130 205 200 200 Z"/>
      <path d="M200 190 C 250 60 370 60 350 150 C 340 200 270 205 200 200 Z"/>
      <path d="M200 205 C 130 210 60 250 90 320 C 120 370 185 310 200 230 Z"/>
      <path d="M200 205 C 270 210 340 250 310 320 C 280 370 215 310 200 230 Z"/>
      <circle cx="110" cy="130" r="25"/><circle cx="290" cy="130" r="25"/>
      <circle cx="130" cy="280" r="18"/><circle cx="270" cy="280" r="18"/>
      <circle cx="160" cy="170" r="10"/><circle cx="240" cy="170" r="10"/>
      <path d="M195 120 Q 180 70 160 60 M205 120 Q 220 70 240 60" fill="none"/>
      <circle cx="160" cy="60" r="7"/><circle cx="240" cy="60" r="7"/>
      <ellipse cx="200" cy="215" rx="14" ry="95"/>
      <circle cx="200" cy="125" r="20"/>`) },

    { id: 'owl', name: 'Совеня', svg: wrap(`
      <rect x="20" y="335" width="360" height="26" rx="13"/>
      <path d="M130 90 L120 40 L165 75 Z"/>
      <path d="M270 90 L280 40 L235 75 Z"/>
      <ellipse cx="200" cy="210" rx="105" ry="135"/>
      <path d="M100 190 C 60 240 75 300 120 320 C 120 260 115 220 100 190 Z"/>
      <path d="M300 190 C 340 240 325 300 280 320 C 280 260 285 220 300 190 Z"/>
      <ellipse cx="200" cy="265" rx="62" ry="70"/>
      <path d="M170 240 Q 180 252 190 240 M210 240 Q 220 252 230 240 M180 270 Q 190 282 200 270 M200 270 Q 210 282 220 270 M170 300 Q 180 312 190 300 M210 300 Q 220 312 230 300" fill="none" stroke-width="4"/>
      <circle cx="160" cy="140" r="38"/><circle cx="240" cy="140" r="38"/>
      ${eye(160, 140, 16)}${eye(240, 140, 16)}
      <path d="M188 170 L212 170 L200 192 Z"/>
      <path d="M170 335 L172 350 M185 335 L185 352 M215 335 L215 352 M230 335 L228 350" fill="none"/>`) },

    { id: 'hedgehog', name: 'Їжачок', svg: wrap(`
      <path d="${spikes()}"/>
      <ellipse cx="200" cy="270" rx="115" ry="70"/>
      <path d="M280 228 C 320 225 360 260 372 290 C 340 312 300 312 278 300 C 265 275 265 245 280 228 Z"/>
      <circle cx="372" cy="290" r="9" fill="#000"/>
      ${eye(318, 262, 8)}
      <path d="M335 298 Q 345 304 355 298" fill="none"/>
      <circle cx="140" cy="132" r="32"/>
      <path d="M140 100 Q 145 85 158 80" fill="none"/>
      <path d="M150 92 Q 175 75 185 95 Q 165 100 150 92 Z"/>
      <ellipse cx="150" cy="345" rx="26" ry="13"/>
      <ellipse cx="250" cy="345" rx="26" ry="13"/>`) },
  ];

  if (typeof module !== 'undefined') module.exports = PAGES;
  else window.COLORING_PAGES = PAGES;
})();
