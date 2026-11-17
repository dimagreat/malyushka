(function () {
  const { add, eye } = (typeof window !== "undefined" ? window : globalThis).COLORING;
  // scalloped "cloud" outline around an ellipse (for sheep wool)
  const cloud = (cx, cy, rx, ry, n, r) => {
    const pts = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      pts.push([(cx + rx * Math.cos(a)).toFixed(1), (cy + ry * Math.sin(a)).toFixed(1)]);
    }
    let d = `M${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i <= n; i++) { const p = pts[i % n]; d += ` A${r} ${r} 0 0 1 ${p[0]} ${p[1]}`; }
    return `<path d="${d} Z"/>`;
  };
  add("farm", [
    { id: "cow", name: "Корівка", body: `
      <path d="M292 300 Q 335 300 340 345" fill="none"/>
      <path d="M330 338 Q 352 350 340 370 Q 326 362 330 338 Z"/>
      <rect x="128" y="320" width="40" height="52" rx="10"/>
      <rect x="232" y="320" width="40" height="52" rx="10"/>
      <ellipse cx="200" cy="285" rx="100" ry="58"/>
      <path d="M120 262 Q 140 238 170 250 Q 188 275 165 298 Q 135 312 120 290 Q 112 275 120 262 Z"/>
      <path d="M232 290 Q 250 262 282 270 Q 300 295 285 318 Q 258 332 238 318 Q 228 305 232 290 Z"/>
      <path d="M128 360 L168 360 L168 362 Q 168 372 158 372 L138 372 Q 128 372 128 362 Z" fill="#000"/>
      <path d="M232 360 L272 360 L272 362 Q 272 372 262 372 L242 372 Q 232 372 232 362 Z" fill="#000"/>
      <path d="M150 92 Q 120 80 118 40 Q 140 52 165 78 Z"/>
      <path d="M250 92 Q 280 80 282 40 Q 260 52 235 78 Z"/>
      <ellipse cx="88" cy="135" rx="44" ry="22" transform="rotate(20 88 135)"/>
      <ellipse cx="312" cy="135" rx="44" ry="22" transform="rotate(-20 312 135)"/>
      <ellipse cx="200" cy="155" rx="88" ry="82"/>
      <path d="M220 82 Q 262 80 270 120 Q 262 150 232 140 Q 210 120 220 82 Z"/>
      ${eye(165, 148, 11)}
      ${eye(235, 148, 11)}
      <ellipse cx="200" cy="208" rx="70" ry="42"/>
      <ellipse cx="175" cy="198" rx="9" ry="12" fill="#000"/>
      <ellipse cx="225" cy="198" rx="9" ry="12" fill="#000"/>
      <path d="M172 224 Q 200 242 228 224" fill="none"/>` },
    { id: "pig", name: "Свинка", body: `
      <path d="M290 290 Q 320 285 318 265 Q 316 250 304 256 Q 296 266 312 272 Q 330 274 340 258" fill="none"/>
      <rect x="135" y="318" width="40" height="52" rx="12"/>
      <rect x="225" y="318" width="40" height="52" rx="12"/>
      <ellipse cx="200" cy="295" rx="98" ry="64"/>
      <path d="M135 358 L175 358 L175 360 Q 175 370 163 370 L147 370 Q 135 370 135 360 Z" fill="#000"/>
      <path d="M225 358 L265 358 L265 360 Q 265 370 253 370 L237 370 Q 225 370 225 360 Z" fill="#000"/>
      <path d="M118 120 L105 45 L170 82 Z"/>
      <path d="M282 120 L295 45 L230 82 Z"/>
      <circle cx="200" cy="160" r="90"/>
      ${eye(162, 135, 11)}
      ${eye(238, 135, 11)}
      <ellipse cx="200" cy="182" rx="44" ry="32"/>
      <ellipse cx="185" cy="182" rx="8" ry="13" fill="#000"/>
      <ellipse cx="215" cy="182" rx="8" ry="13" fill="#000"/>
      <path d="M170 225 Q 200 245 230 225" fill="none"/>
      <ellipse cx="135" cy="190" rx="16" ry="10"/>
      <ellipse cx="265" cy="190" rx="16" ry="10"/>` },
    { id: "chicken", name: "Курочка", body: `
      <path d="M180 320 L170 372 M200 320 L215 372" fill="none"/>
      <path d="M170 372 L145 372 M170 372 L160 384 M170 372 L185 384 M215 372 L240 372 M215 372 L205 384 M215 372 L230 384" fill="none"/>
      <path d="M270 210 Q 300 120 345 140 Q 360 180 325 210 Q 360 220 350 260 Q 320 290 280 270 Z"/>
      <path d="M95 170 Q 90 290 190 330 Q 290 330 310 240 Q 300 190 240 190 Q 200 190 180 160 Z"/>
      <path d="M135 80 Q 118 50 145 45 Q 148 15 178 28 Q 198 8 215 35 Q 245 40 228 75 L 200 90 Z"/>
      <ellipse cx="160" cy="135" rx="72" ry="68"/>
      <path d="M92 120 L35 145 L92 168 Z"/>
      <path d="M95 165 Q 70 205 98 218 Q 125 205 115 170 Z"/>
      ${eye(140, 125, 11)}
      <path d="M180 245 Q 205 200 265 215 Q 275 260 220 285 Q 190 285 180 245 Z"/>
      <path d="M200 255 Q 225 250 245 230 M210 272 Q 235 265 255 250" fill="none" stroke-width="4"/>` },
    { id: "sheep", name: "Овечка", body: `
      <rect x="130" y="300" width="34" height="70" rx="10"/>
      <rect x="236" y="300" width="34" height="70" rx="10"/>
      <path d="M130 352 L164 352 L164 360 Q 164 370 154 370 L140 370 Q 130 370 130 360 Z" fill="#000"/>
      <path d="M236 352 L270 352 L270 360 Q 270 370 260 370 L246 370 Q 236 370 236 360 Z" fill="#000"/>
      ${cloud(200, 255, 130, 72, 16, 30)}
      <ellipse cx="128" cy="140" rx="40" ry="18" transform="rotate(25 128 140)"/>
      <ellipse cx="272" cy="140" rx="40" ry="18" transform="rotate(-25 272 140)"/>
      <ellipse cx="200" cy="160" rx="62" ry="72"/>
      ${cloud(200, 95, 52, 26, 10, 18)}
      ${eye(176, 160, 10)}
      ${eye(224, 160, 10)}
      <ellipse cx="200" cy="198" rx="12" ry="8" fill="#000"/>
      <path d="M200 206 L200 214 M200 214 Q 188 224 180 214 M200 214 Q 212 224 220 214" fill="none"/>` },
  ]);
})();
