// Sounds: tiny synthesized effects (no files) + animal voices from sounds/*.mp3.
(function () {
  const KEY = 'malyushka-sound';
  let muted = false;
  try { muted = localStorage.getItem(KEY) === 'off'; } catch {}

  // iPhone: play even when the ring/silent switch is on (Safari 17+)
  try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch {}

  let ac = null;
  function audio() {
    if (!ac) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ac = new AC();
    }
    if (ac.state === 'suspended') ac.resume();
    return ac;
  }
  // browsers only allow audio after a touch: unlock on the first one
  addEventListener('pointerdown', () => audio(), { capture: true });

  function tone(freq, start, dur, { type = 'sine', vol = .18, to = null } = {}) {
    const a = audio(); if (!a) return;
    const t = a.currentTime + start;
    const o = a.createOscillator(), g = a.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(a.destination);
    o.start(t); o.stop(t + dur + 0.02);
  }

  const PENTA = [1047, 1175, 1319, 1568, 1760, 2093, 2349, 2637];
  const EFFECTS = {
    plop()    { tone(520, 0, .18, { type: 'triangle', to: 240, vol: .25 }); },
    pop()     { tone(320, 0, .12, { type: 'sine', to: 900, vol: .25 }); },
    sparkle() { for (let i = 0; i < 6; i++) tone(PENTA[(Math.random() * PENTA.length) | 0], i * .055, .35, { vol: .09 }); },
    pearl()   { tone(784, 0, .5, { vol: .1 }); tone(988, .08, .5, { vol: .08 }); tone(1319, .16, .6, { vol: .06 }); },
    tap()     { tone(660, 0, .07, { type: 'triangle', vol: .12 }); },
    // for animals that don't really have a voice
    bubbles() { for (let i = 0; i < 7; i++) { const f = 300 + Math.random() * 500; tone(f, i * .09 + Math.random() * .04, .12, { to: f * 2.4, vol: .2 }); } },
    flutter() { for (let i = 0; i < 10; i++) tone(i % 2 ? 1800 : 1500, i * .06, .05, { type: 'triangle', vol: .07 }); },
    boing()   { tone(140, 0, .5, { type: 'sine', to: 420, vol: .3 }); tone(420, .45, .35, { type: 'sine', to: 160, vol: .2 }); },
    sniff()   { for (let i = 0; i < 4; i++) noise(i * .16, .1, 2500); },
  };
  function noise(start, dur, freq) {
    const a = audio(); if (!a) return;
    const t = a.currentTime + start, len = Math.ceil(a.sampleRate * dur);
    const buf = a.createBuffer(1, len, a.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * i / len);
    const src = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    src.buffer = buf; f.type = 'bandpass'; f.frequency.value = freq; g.gain.value = .5;
    src.connect(f).connect(g).connect(a.destination); src.start(t);
  }

  // Animal voices: id -> { src, start, end } (seconds). Filled in by sounds/animals.js when present.
  const ANIMALS = window.ANIMAL_SOUNDS || {};
  const buffers = {};
  let current = null;
  async function animal(id) {
    const info = ANIMALS[id];
    if (!info || muted) return false;
    const a = audio(); if (!a) return false;
    try {
      if (!buffers[id]) {
        const res = await fetch(info.src);
        if (!res.ok) return false;
        const bytes = await res.arrayBuffer();
        buffers[id] = await new Promise((ok, fail) => a.decodeAudioData(bytes, ok, fail));
      }
      if (current) { try { current.stop(); } catch {} }
      const src = a.createBufferSource(), g = a.createGain();
      src.buffer = buffers[id];
      const start = info.start || 0, dur = (info.end || buffers[id].duration) - start;
      g.gain.setValueAtTime(info.vol || 1, a.currentTime);
      g.gain.setValueAtTime(info.vol || 1, a.currentTime + Math.max(0, dur - .25));
      g.gain.linearRampToValueAtTime(0.0001, a.currentTime + dur); // gentle fade-out at the cut
      src.connect(g).connect(a.destination);
      src.start(0, start, dur);
      current = src;
      return true;
    } catch { return false; }
  }

  const play = name => { if (!muted && EFFECTS[name]) try { EFFECTS[name](); } catch {} };
  window.SFX = {
    play,
    // real recording if we have one, otherwise a playful effect (never a robot voice)
    async voice(id) { if (!(await animal(id))) play((window.ANIMAL_EFFECTS || {})[id] || 'pop'); },
    get muted() { return muted; },
    setMuted(v) { muted = v; try { localStorage.setItem(KEY, v ? 'off' : 'on'); } catch {} if (v && current) try { current.stop(); } catch {} },
  };
})();
