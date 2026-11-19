// Sounds: tiny synthesized effects, drawing sounds and a music box (no files),
// plus real animal voices from sounds/*.m4a.
// Sound mode (one button): 'on' = sounds, 'music' = sounds + music, 'off' = silence.
(function () {
  const KEY = 'malyushka-sound';
  let mode = 'on';
  try { const v = localStorage.getItem(KEY); if (v === 'off' || v === 'music') mode = v; } catch {}
  const muted = () => mode === 'off';

  // iPhone: play even when the ring/silent switch is on (Safari 17+)
  try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch {}

  let ac = null, master = null;
  function audio() {
    if (!ac) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ac = new AC();
      master = ac.createGain(); master.connect(ac.destination);
    }
    if (ac.state === 'suspended') ac.resume();
    return ac;
  }
  // browsers only allow audio after a touch: unlock on the first one
  addEventListener('pointerdown', () => { audio(); if (mode === 'music') music.start(); }, { capture: true });

  function tone(freq, start, dur, { type = 'sine', vol = .18, to = null, out = null } = {}) {
    const a = audio(); if (!a) return;
    const t = a.currentTime + start;
    const o = a.createOscillator(), g = a.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(out || master);
    o.start(t); o.stop(t + dur + 0.02);
  }
  let noiseBuf = null;
  function noiseBuffer() {
    const a = audio();
    if (!noiseBuf) {
      noiseBuf = a.createBuffer(1, a.sampleRate, a.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    return noiseBuf;
  }
  // short filtered noise puff (sniff, whoosh, steam)
  function noise(start, dur, freq, { vol = .5, to = null, q = 1 } = {}) {
    const a = audio(); if (!a) return;
    const t = a.currentTime + start;
    const src = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    src.buffer = noiseBuffer(); src.loop = true;
    f.type = 'bandpass'; f.Q.value = q; f.frequency.setValueAtTime(freq, t);
    if (to) f.frequency.exponentialRampToValueAtTime(to, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + dur * .3);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(master);
    src.start(t); src.stop(t + dur + .05);
  }

  const PENTA = [1047, 1175, 1319, 1568, 1760, 2093, 2349, 2637];
  const pick = arr => arr[(Math.random() * arr.length) | 0];
  const EFFECTS = {
    plop()    { tone(520, 0, .18, { type: 'triangle', to: 240, vol: .25 }); },
    pop()     { tone(320, 0, .12, { type: 'sine', to: 900, vol: .25 }); },
    sparkle() { for (let i = 0; i < 6; i++) tone(pick(PENTA), i * .055, .35, { vol: .09 }); },
    pearl()   { tone(784, 0, .5, { vol: .1 }); tone(988, .08, .5, { vol: .08 }); tone(1319, .16, .6, { vol: .06 }); },
    zap()     { tone(220, 0, .35, { type: 'sawtooth', to: 880, vol: .05 }); tone(440, 0, .4, { to: 1760, vol: .12 }); },
    tap()     { tone(660, 0, .07, { type: 'triangle', vol: .12 }); },
    boop()    { const f = pick(PENTA) / 2; tone(f, 0, .16, { vol: .14, to: f * 1.02 }); },
    paper()   { noise(0, .25, 1800, { vol: .35, to: 900 }); },
    fanfare() { [523, 659, 784, 1047].forEach((f, i) => tone(f, i * .12, i === 3 ? .7 : .2, { type: 'triangle', vol: .2 }));
                for (let i = 0; i < 8; i++) tone(pick(PENTA), .5 + i * .06, .3, { vol: .07 }); },
    // for pages that don't have a real recording
    bubbles() { for (let i = 0; i < 7; i++) { const f = 300 + Math.random() * 500; tone(f, i * .09 + Math.random() * .04, .12, { to: f * 2.4, vol: .2 }); } },
    flutter() { for (let i = 0; i < 10; i++) tone(i % 2 ? 1800 : 1500, i * .06, .05, { type: 'triangle', vol: .07 }); },
    boing()   { tone(140, 0, .5, { to: 420, vol: .3 }); tone(420, .45, .35, { to: 160, vol: .2 }); },
    sniff()   { for (let i = 0; i < 4; i++) noise(i * .16, .1, 2500); },
    roar()    { tone(110, 0, .9, { type: 'sawtooth', to: 70, vol: .16 }); tone(165, 0, .8, { type: 'square', to: 90, vol: .05 }); noise(0, .9, 400, { vol: .4, to: 200 }); },
    honk()    { [0, .3].forEach(s => { tone(392, s, .22, { type: 'square', vol: .07 }); tone(494, s, .22, { type: 'square', vol: .05 }); }); },
    siren()   { for (let i = 0; i < 3; i++) { tone(660, i * .5, .25, { type: 'triangle', vol: .15 }); tone(880, i * .5 + .25, .25, { type: 'triangle', vol: .15 }); } },
    choo()    { tone(587, 0, .7, { type: 'triangle', vol: .12 }); tone(740, 0, .7, { type: 'triangle', vol: .1 }); for (let i = 0; i < 4; i++) noise(.75 + i * .22, .18, 1200, { vol: .4 }); },
    whoosh()  { noise(0, 1.1, 300, { vol: .6, to: 2500, q: 2 }); },
    horn()    { tone(147, 0, 1, { type: 'sawtooth', vol: .1 }); tone(220, 0, 1, { type: 'triangle', vol: .08 }); },
    magic()   { for (let i = 0; i < 10; i++) tone(PENTA[i % PENTA.length], i * .05, .4, { vol: .08 }); },
    jingle()  { for (let i = 0; i < 8; i++) { tone(2637, i * .09, .25, { vol: .06 }); tone(3136, i * .09 + .02, .2, { vol: .04 }); } },
  };
  const play = name => { if (!muted() && EFFECTS[name]) try { EFFECTS[name](); } catch {} };

  // ---------- drawing sound: soft pencil rustle that follows finger speed, twinkles for sparkly paints ----------
  let rustle = null, twinkleAt = 0, drawKind = 'plain';
  const draw = {
    start(kind) {
      drawKind = kind;
      if (muted()) return;
      const a = audio(); if (!a) return;
      if (!rustle) {
        const src = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
        src.buffer = noiseBuffer(); src.loop = true;
        f.type = 'bandpass'; f.frequency.value = 2600; f.Q.value = .8;
        g.gain.value = 0;
        src.connect(f).connect(g).connect(master); src.start();
        rustle = { g, f };
      }
      rustle.f.frequency.value = kind === 'eraser' ? 1200 : 2600;
    },
    move(speed) { // speed in CSS px per event
      if (muted() || !rustle) return;
      const t = ac.currentTime;
      rustle.g.gain.setTargetAtTime(Math.min(.07, speed * .004), t, .03);
      if (drawKind !== 'plain' && drawKind !== 'eraser' && speed > 1 && t > twinkleAt) {
        twinkleAt = t + .12;
        tone(pick(PENTA) * (drawKind === 'pearl' ? .5 : 1), 0, .3, { vol: .04 });
      }
    },
    end() { if (rustle) rustle.g.gain.setTargetAtTime(0, ac.currentTime, .05); },
  };

  // ---------- music box: a gentle original tune that loops ----------
  const N = { C4: 262, D4: 294, E4: 330, G4: 392, A4: 440, C5: 523, D5: 587, E5: 659, G5: 784, A5: 880 };
  const TUNE = ['E5', 'G5', 'A5', 'G5', 'E5', 'D5', 'C5', '-', 'D5', 'E5', 'G5', 'E5', 'D5', 'C5', 'D5', '-',
                'E5', 'G5', 'A5', 'C5', 'A5', 'G5', 'E5', '-', 'D5', 'E5', 'D5', 'C5', 'A4', 'C5', 'C5', '-'];
  const BASS = ['C4', 'A4', 'D4', 'G4', 'C4', 'A4', 'D4', 'C4'];
  const music = {
    timer: null, step: 0, next: 0, gain: null,
    start() {
      const a = audio(); if (!a || this.timer) return;
      if (!this.gain) { this.gain = a.createGain(); this.gain.connect(master); }
      this.gain.gain.setValueAtTime(.55, a.currentTime);
      this.next = a.currentTime + .1; this.step = 0;
      const beat = .34;
      this.timer = setInterval(() => {
        while (this.next < a.currentTime + .4) {
          const n = TUNE[this.step % TUNE.length];
          if (n !== '-') tone(N[n], this.next - a.currentTime, .6, { type: 'sine', vol: .07, out: this.gain });
          if (this.step % 4 === 0) tone(N[BASS[(this.step / 4) % BASS.length]] / 2, this.next - a.currentTime, 1.2, { type: 'triangle', vol: .05, out: this.gain });
          this.next += beat; this.step++;
        }
      }, 100);
    },
    stop() {
      clearInterval(this.timer); this.timer = null;
      if (this.gain && ac) this.gain.gain.setTargetAtTime(0, ac.currentTime, .1);
    },
  };

  // app minimized / screen locked / another tab: go quiet, come back when the app is open again
  function onVisibility() {
    if (document.hidden) {
      music.stop(); draw.end();
      if (current) { try { current.stop(); } catch {} current = null; }
      if (ac && ac.state === 'running') ac.suspend();
    } else if (ac) {
      ac.resume(); // if the phone refuses without a touch, the next touch resumes it
      if (mode === 'music') music.start();
    }
  }
  document.addEventListener('visibilitychange', onVisibility);
  addEventListener('pagehide', () => { if (ac) { music.stop(); ac.suspend(); } });

  // ---------- animal voices: id -> { src, start, end } (filled in by sounds/animals.js) ----------
  const ANIMALS = window.ANIMAL_SOUNDS || {};
  const buffers = {};
  let current = null;
  async function animal(id) {
    const info = ANIMALS[id];
    if (!info || muted()) return false;
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
      src.connect(g).connect(master);
      src.start(0, start, dur);
      current = src;
      return true;
    } catch { return false; }
  }

  window.SFX = {
    play, draw,
    // real recording if we have one, otherwise a playful effect (never a robot voice)
    async voice(id) { if (!(await animal(id))) play((window.ANIMAL_EFFECTS || {})[id] || 'magic'); },
    get mode() { return mode; },
    get muted() { return muted(); },
    setMode(m) {
      mode = m;
      try { localStorage.setItem(KEY, m); } catch {}
      if (m === 'music') music.start(); else music.stop();
      if (m === 'off') { draw.end(); if (current) try { current.stop(); } catch {} }
    },
  };
})();
