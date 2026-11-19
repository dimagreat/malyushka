(function () {
  const { add, eye } = (typeof window !== "undefined" ? window : globalThis).COLORING;
  // 5-point star centered at (cx, cy)
  const star = (cx, cy, R, r) => {
    let d = "";
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + i * Math.PI / 5, rad = i % 2 ? r : R;
      d += (i ? " L" : "M") + (cx + rad * Math.cos(a)).toFixed(1) + " " + (cy + rad * Math.sin(a)).toFixed(1);
    }
    return `<path d="${d} Z"/>`;
  };
  // flat-top band with scalloped (drippy) bottom edge, from x1 to x2
  const frosting = (x1, x2, y, h, n) => {
    const w = (x2 - x1) / n, r = w / 2;
    let d = `M${x1} ${y + 14} Q${x1} ${y} ${x1 + 14} ${y} L${x2 - 14} ${y} Q${x2} ${y} ${x2} ${y + 14} L${x2} ${y + h}`;
    for (let i = 1; i <= n; i++) d += ` A${r} ${r} 0 0 1 ${x2 - w * i} ${y + h}`;
    return `<path d="${d} Z"/>`;
  };
  add("holiday", [
    { id: "tree", name: "Ялинка", body: `
      <rect x="178" y="300" width="44" height="45"/>
      <path d="M145 335 L255 335 L240 392 L160 392 Z"/>
      <path d="M200 170 L335 312 Q 200 338 65 312 Z"/>
      <path d="M200 100 L302 232 Q 200 254 98 232 Z"/>
      <path d="M200 50 L262 152 Q 200 168 138 152 Z"/>
      ${star(200, 46, 42, 19)}
      <circle cx="200" cy="128" r="13"/>
      <circle cx="152" cy="208" r="15"/>
      <circle cx="248" cy="208" r="15"/>
      <circle cx="125" cy="290" r="16"/>
      <circle cx="200" cy="298" r="16"/>
      <circle cx="275" cy="290" r="16"/>` },
    { id: "cake", name: "Тортик", body: `
      <ellipse cx="200" cy="366" rx="185" ry="24"/>
      <rect x="62" y="250" width="276" height="112" rx="14"/>
      ${frosting(62, 338, 250, 32, 6)}
      <circle cx="110" cy="324" r="14"/>
      <circle cx="200" cy="330" r="14"/>
      <circle cx="290" cy="324" r="14"/>
      <rect x="112" y="165" width="176" height="88" rx="12"/>
      ${frosting(112, 288, 165, 28, 4)}
      <rect x="138" y="100" width="22" height="66" rx="5"/>
      <rect x="189" y="92" width="22" height="74" rx="5"/>
      <rect x="240" y="100" width="22" height="66" rx="5"/>
      <path d="M149 90 Q 128 66 149 38 Q 170 66 149 90 Z"/>
      <path d="M200 82 Q 179 58 200 30 Q 221 58 200 82 Z"/>
      <path d="M251 90 Q 230 66 251 38 Q 272 66 251 90 Z"/>` },
    { id: "snowman", name: "Сніговик", body: `
      <path d="M150 200 L72 140 M100 162 L82 128 M250 200 L328 140 M300 162 L318 128" fill="none"/>
      <circle cx="200" cy="312" r="80"/>
      <circle cx="200" cy="206" r="60"/>
      <circle cx="200" cy="198" r="9" fill="#000"/>
      <circle cx="200" cy="232" r="9" fill="#000"/>
      <circle cx="200" cy="292" r="10" fill="#000"/>
      <circle cx="200" cy="330" r="10" fill="#000"/>
      <path d="M212 160 L246 160 L252 232 Q 236 240 220 232 Z"/>
      <circle cx="200" cy="112" r="48"/>
      <rect x="148" y="150" width="104" height="26" rx="13"/>
      <rect x="164" y="8" width="72" height="60" rx="6"/>
      <rect x="164" y="40" width="72" height="20"/>
      <rect x="138" y="60" width="124" height="18" rx="8"/>
      ${eye(183, 102, 8)}
      ${eye(217, 102, 8)}
      <path d="M198 110 L254 124 L198 136 Z"/>
      <circle cx="180" cy="138" r="3.5" fill="#000" stroke="none"/>
      <circle cx="191" cy="144" r="3.5" fill="#000" stroke="none"/>
      <circle cx="209" cy="144" r="3.5" fill="#000" stroke="none"/>
      <circle cx="220" cy="138" r="3.5" fill="#000" stroke="none"/>` },
    { id: "gift", name: "Подарунок", body: `
      <path d="M200 140 C 160 50 70 60 100 128 Q 140 152 200 140 Z"/>
      <path d="M200 140 C 240 50 330 60 300 128 Q 260 152 200 140 Z"/>
      <rect x="70" y="190" width="260" height="190" rx="8"/>
      <rect x="52" y="138" width="296" height="62" rx="10"/>
      <circle cx="120" cy="250" r="16"/>
      <circle cx="130" cy="330" r="16"/>
      <circle cx="280" cy="250" r="16"/>
      <circle cx="270" cy="330" r="16"/>
      <rect x="176" y="138" width="48" height="242"/>
      <ellipse cx="200" cy="132" rx="28" ry="22"/>` },
    { id: "balloons", name: "Кульки", body: `
      <path d="M115 220 Q 140 290 196 362 M285 220 Q 260 290 204 362 M200 280 Q 185 320 200 362" fill="none"/>
      <path d="M200 365 L162 344 L162 386 Z"/>
      <path d="M200 365 L238 344 L238 386 Z"/>
      <circle cx="200" cy="365" r="9"/>
      <path d="M115 200 L102 220 L128 220 Z"/>
      <ellipse cx="110" cy="115" rx="72" ry="88"/>
      <path d="M90 60 Q 66 78 64 110" fill="none"/>
      <path d="M285 200 L272 220 L298 220 Z"/>
      <ellipse cx="290" cy="115" rx="72" ry="88"/>
      <path d="M270 60 Q 246 78 244 110" fill="none"/>
      <path d="M200 260 L187 280 L213 280 Z"/>
      <ellipse cx="200" cy="172" rx="74" ry="90"/>
      <path d="M180 116 Q 156 134 154 166" fill="none"/>` },
  ]);
})();
