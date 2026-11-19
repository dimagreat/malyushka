(function () {
  const { add, eye } = (typeof window !== "undefined" ? window : globalThis).COLORING;
  add("dino", [
    { id: "trex", name: "Тиранозаврик", body: `
      <path d="M115 220 Q 50 250 12 350 Q 80 340 140 305 Z"/>
      <rect x="120" y="290" width="52" height="75" rx="18"/>
      <rect x="215" y="290" width="56" height="75" rx="18"/>
      <path d="M205 380 L285 380 Q 292 380 290 370 Q 285 355 268 355 L 220 355 Q 205 355 205 368 Z"/>
      <path d="M110 380 L180 380 Q 186 380 184 370 Q 180 355 165 355 L 125 355 Q 110 355 110 368 Z"/>
      <path d="M92 255 Q 100 172 185 168 Q 222 165 232 135 L 290 160 Q 305 230 288 282 Q 268 330 190 330 Q 98 330 92 255 Z"/>
      <ellipse cx="215" cy="268" rx="58" ry="48"/>
      <circle cx="140" cy="215" r="13"/>
      <circle cx="122" cy="255" r="10"/>
      <ellipse cx="300" cy="232" rx="24" ry="13" transform="rotate(25 300 232)"/>
      <path d="M210 160 Q 200 40 300 30 Q 392 28 392 105 Q 392 175 300 178 Q 240 180 210 160 Z"/>
      ${eye(300, 82, 14)}
      <path d="M248 140 Q 310 168 375 128" fill="none"/>
      <path d="M268 149 L275 164 L284 153 Z M330 150 L338 163 L345 146 Z"/>
      <circle cx="375" cy="70" r="4" fill="#000"/>` },
    { id: "brachio", name: "Довгошийка", body: `
      <path d="M320 260 Q 390 270 395 330 Q 360 310 310 312 Z"/>
      <rect x="108" y="290" width="44" height="88" rx="16"/>
      <rect x="298" y="290" width="44" height="88" rx="16"/>
      <path d="M140 270 Q 90 160 70 85 L 140 75 Q 160 170 230 230 Z"/>
      <ellipse cx="225" cy="270" rx="120" ry="72"/>
      <rect x="170" y="295" width="44" height="88" rx="16"/>
      <rect x="235" y="295" width="44" height="88" rx="16"/>
      <ellipse cx="105" cy="62" rx="62" ry="40"/>
      ${eye(95, 52, 11)}
      <path d="M60 78 Q 85 92 112 80" fill="none"/>
      <circle cx="52" cy="55" r="4" fill="#000"/>
      <circle cx="210" cy="240" r="20"/>
      <circle cx="265" cy="225" r="15"/>
      <circle cx="300" cy="262" r="18"/>
      <circle cx="250" cy="275" r="13"/>` },
    { id: "triceratops", name: "Трицератопс", body: `
      <path d="M330 250 Q 395 270 395 330 Q 360 315 325 305 Z"/>
      <rect x="165" y="285" width="46" height="85" rx="16"/>
      <rect x="290" y="285" width="46" height="85" rx="16"/>
      <ellipse cx="250" cy="250" rx="110" ry="80"/>
      <rect x="200" y="295" width="46" height="85" rx="16"/>
      <rect x="320" y="290" width="46" height="85" rx="16"/>
      <circle cx="160" cy="165" r="105"/>
      <circle cx="160" cy="165" r="80"/>
      <path d="M95 140 L 70 50 L 130 125 Z"/>
      <path d="M160 140 L 175 45 L 195 135 Z"/>
      <ellipse cx="115" cy="205" rx="85" ry="68"/>
      <path d="M40 195 L 18 140 L 62 175 Z"/>
      ${eye(100, 185, 13)}
      ${eye(160, 185, 13)}
      <path d="M60 240 Q 120 275 175 240" fill="none"/>
      <circle cx="275" cy="225" r="16"/>
      <circle cx="320" cy="250" r="12"/>` },
    { id: "stego", name: "Стегозавр", body: `
      <path d="M368 238 L 345 188 L 390 222 Z"/>
      <path d="M388 215 L 382 162 L 400 205 Z"/>
      <path d="M335 255 Q 385 245 398 195 Q 405 275 335 305 Z"/>
      <path d="M82 250 Q 76 190 110 145 Q 144 190 138 250 Z"/>
      <path d="M137 250 Q 131 140 165 95 Q 199 140 193 250 Z"/>
      <path d="M197 250 Q 191 115 225 70 Q 259 115 253 250 Z"/>
      <path d="M257 250 Q 251 140 285 95 Q 319 140 313 250 Z"/>
      <path d="M310 250 Q 304 195 338 150 Q 372 195 366 250 Z"/>
      <rect x="120" y="280" width="48" height="85" rx="16"/>
      <rect x="282" y="280" width="48" height="85" rx="16"/>
      <path d="M80 300 Q 90 160 220 160 Q 350 160 360 300 Q 220 320 80 300 Z"/>
      <rect x="160" y="290" width="48" height="88" rx="16"/>
      <rect x="245" y="290" width="48" height="88" rx="16"/>
      <path d="M115 245 Q 70 215 38 228 Q 2 248 12 285 Q 35 318 118 298 Z"/>
      ${eye(48, 255, 12)}
      <path d="M22 285 Q 45 297 70 285" fill="none"/>
      <circle cx="165" cy="225" r="15"/>
      <circle cx="225" cy="205" r="17"/>
      <circle cx="285" cy="225" r="15"/>
      <circle cx="225" cy="260" r="13"/>` },
    { id: "babydino", name: "Динозаврик в яйці", body: `
      <path d="M295 95 L 330 105 L 305 125 Z"/>
      <path d="M305 130 L 340 145 L 305 160 Z"/>
      <path d="M295 165 L 325 185 L 290 192 Z"/>
      <path d="M150 230 Q 120 120 190 70 Q 260 30 300 100 Q 320 150 280 185 L 270 240 Z"/>
      <path d="M160 45 L 175 10 L 205 35 L 230 5 L 250 40 L 275 20 Q 270 45 245 55 Q 200 65 160 45 Z"/>
      ${eye(210, 125, 15)}
      ${eye(268, 125, 15)}
      <path d="M215 165 Q 245 185 275 160" fill="none"/>
      <circle cx="295" cy="100" r="4" fill="#000"/>
      <ellipse cx="148" cy="225" rx="22" ry="16" transform="rotate(-30 148 225)"/>
      <ellipse cx="282" cy="225" rx="22" ry="16" transform="rotate(30 282 225)"/>
      <path d="M70 230 L 105 205 L 135 240 L 170 200 L 200 240 L 235 200 L 265 240 L 300 205 L 330 230 Q 345 280 330 320 Q 300 390 200 395 Q 100 390 70 320 Q 55 280 70 230 Z"/>
      <circle cx="130" cy="300" r="20"/>
      <circle cx="270" cy="295" r="18"/>
      <circle cx="200" cy="345" r="22"/>
      <circle cx="100" cy="350" r="12"/>
      <circle cx="300" cy="350" r="13"/>` },
  ]);
})();
