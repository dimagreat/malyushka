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
  };

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

  // animals without a recorded voice just say their name (Ukrainian voice if the phone has one)
  function say(text) {
    if (muted || !('speechSynthesis' in window)) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'uk-UA'; u.rate = .9; u.pitch = 1.3;
    const v = speechSynthesis.getVoices().find(v => v.lang && v.lang.toLowerCase().startsWith('uk'));
    if (v) u.voice = v;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }

  window.SFX = {
    play(name) { if (!muted && EFFECTS[name]) try { EFFECTS[name](); } catch {} },
    async voice(id, name) { if (!(await animal(id))) say(name); },
    get muted() { return muted; },
    setMuted(v) { muted = v; try { localStorage.setItem(KEY, v ? 'off' : 'on'); } catch {} if (v && 'speechSynthesis' in window) speechSynthesis.cancel(); },
  };
})();
