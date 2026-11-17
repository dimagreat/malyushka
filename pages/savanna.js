(function () {
  const { add, eye } = (typeof window !== "undefined" ? window : globalThis).COLORING;
  // closed scalloped ring path: n bumps on a circle of radius r around (cx, cy)
  const scallop = (cx, cy, r, n, b) => {
    let d = "";
    for (let i = 0; i <= n; i++) {
      const a = (i / n) * Math.PI * 2 - Math.PI / 2;
      const x = (cx + r * Math.cos(a)).toFixed(1), y = (cy + r * Math.sin(a)).toFixed(1);
      d += i === 0 ? `M${x} ${y}` : ` A${b} ${b} 0 0 1 ${x} ${y}`;
    }
    return `<path d="${d} Z"/>`;
  };
  add("savanna", [
    { id: "lion", name: "Левеня", body: `
      <path d="M262 330 C 330 345 350 300 335 262" fill="none" stroke-width="8"/>
      <path d="M335 262 C 315 250 318 222 338 226 C 358 222 366 250 335 262 Z"/>
      <ellipse cx="200" cy="300" rx="82" ry="70"/>
      <ellipse cx="200" cy="318" rx="44" ry="46"/>
      ${scallop(200, 160, 112, 14, 26)}
      <circle cx="140" cy="98" r="22"/>
      <circle cx="260" cy="98" r="22"/>
      <circle cx="200" cy="165" r="74"/>
      ${eye(172, 148, 11)}${eye(228, 148, 11)}
      <ellipse cx="200" cy="194" rx="38" ry="28"/>
      <path d="M188 176 L212 176 L200 190 Z" fill="#000"/>
      <path d="M200 190 L200 198 M184 204 Q 200 218 216 204" fill="none"/>
      <ellipse cx="160" cy="364" rx="32" ry="18"/>
      <ellipse cx="240" cy="364" rx="32" ry="18"/>` },
    { id: "elephant", name: "Слоник", body: `
      <path d="M282 310 C 316 310 324 290 332 272" fill="none"/>
      <rect x="128" y="316" width="50" height="62" rx="16"/>
      <rect x="222" y="316" width="50" height="62" rx="16"/>
      <ellipse cx="200" cy="300" rx="96" ry="60"/>
      <ellipse cx="106" cy="150" rx="80" ry="84"/>
      <ellipse cx="294" cy="150" rx="80" ry="84"/>
      <path d="M170 190 C 166 260 170 306 198 326 C 216 338 246 326 240 300 C 236 284 214 286 214 300 L 212 300 C 208 280 226 250 230 190 Z"/>
      <ellipse cx="200" cy="160" rx="78" ry="74"/>
      ${eye(168, 150, 11)}${eye(232, 150, 11)}
      <path d="M150 190 Q 160 196 170 190 M230 190 Q 240 196 250 190" fill="none" stroke-width="4"/>
      <path d="M146 366 L146 376 M160 366 L160 376 M240 366 L240 376 M254 366 L254 376" fill="none" stroke-width="4"/>` },
    { id: "giraffe", name: "Жирафа", body: `
      <path d="M150 392 C 160 300 172 220 176 150 L 236 150 C 236 230 250 310 270 392 Z"/>
      <path d="M190 210 C 205 200 222 206 222 222 C 222 240 200 246 190 236 C 182 228 182 216 190 210 Z"/>
      <path d="M176 270 C 190 258 214 262 214 282 C 214 300 188 306 176 294 C 168 286 168 276 176 270 Z"/>
      <path d="M220 300 C 236 292 252 300 252 320 C 252 338 230 344 220 334 C 212 324 212 308 220 300 Z"/>
      <path d="M170 336 C 184 328 204 334 202 354 C 200 372 176 374 166 364 C 160 352 162 342 170 336 Z"/>
      <rect x="168" y="38" width="16" height="48" rx="8"/>
      <rect x="226" y="38" width="16" height="48" rx="8"/>
      <circle cx="176" cy="36" r="13"/>
      <circle cx="234" cy="36" r="13"/>
      <ellipse cx="128" cy="96" rx="34" ry="15" transform="rotate(-20 128 96)"/>
      <ellipse cx="282" cy="96" rx="34" ry="15" transform="rotate(20 282 96)"/>
      <ellipse cx="205" cy="112" rx="64" ry="50"/>
      <ellipse cx="205" cy="160" rx="50" ry="36"/>
      ${eye(180, 104, 10)}${eye(230, 104, 10)}
      <ellipse cx="188" cy="152" rx="6" ry="8" fill="#000"/>
      <ellipse cx="222" cy="152" rx="6" ry="8" fill="#000"/>
      <path d="M186 172 Q 205 186 224 172" fill="none"/>` },
    { id: "zebra", name: "Зебра", body: `
      <path d="M318 214 C 340 230 345 270 340 300" fill="none"/>
      <path d="M340 296 C 328 310 330 336 344 340 C 358 336 360 310 340 296 Z"/>
      <rect x="150" y="250" width="34" height="100" rx="12"/>
      <rect x="270" y="250" width="34" height="100" rx="12"/>
      <rect x="150" y="282" width="34" height="22"/>
      <rect x="270" y="282" width="34" height="22"/>
      <rect x="148" y="338" width="38" height="24" rx="8"/>
      <rect x="268" y="338" width="38" height="24" rx="8"/>
      <path d="M104 60 A16 16 0 0 1 144 68 A16 16 0 0 1 170 88 A16 16 0 0 1 188 114 A16 16 0 0 1 204 142 A16 16 0 0 1 222 170 L 196 200 L 104 100 Z"/>
      <path d="M84 110 C 100 70 150 70 168 108 C 186 136 200 160 214 190 L 150 250 C 130 210 106 170 92 130 Z"/>
      <path d="M120 168 C 136 146 162 134 184 134 C 174 158 146 170 120 168 Z"/>
      <ellipse cx="228" cy="226" rx="104" ry="60"/>
      <path d="M194 178 C 216 200 216 250 194 278 C 174 250 174 200 194 178 Z"/>
      <path d="M244 170 C 266 196 266 254 244 284 C 222 254 222 196 244 170 Z"/>
      <path d="M292 182 C 310 202 310 250 294 272 C 274 250 274 202 292 182 Z"/>
      <ellipse cx="80" cy="46" rx="12" ry="26" transform="rotate(-10 80 46)"/>
      <ellipse cx="116" cy="46" rx="12" ry="26" transform="rotate(14 116 46)"/>
      <ellipse cx="96" cy="96" rx="46" ry="52"/>
      <path d="M70 52 C 84 44 108 44 122 54 C 114 72 80 72 70 52 Z"/>
      <ellipse cx="88" cy="148" rx="40" ry="28"/>
      ${eye(80, 94, 9)}${eye(114, 94, 9)}
      <circle cx="74" cy="144" r="5" fill="#000"/>
      <circle cx="102" cy="144" r="5" fill="#000"/>
      <path d="M72 160 Q 88 172 104 160" fill="none"/>` },
  ]);
})();
