(function () {
  const { add, eye } = (typeof window !== "undefined" ? window : globalThis).COLORING;
  const wheel = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}"/><circle cx="${x}" cy="${y}" r="${Math.round(r * 0.4)}"/>`;
  add("transport", [
    { id: "car", name: "Машинка", body: `
      <path d="M90 190 Q 105 92 190 88 L 245 88 Q 300 92 325 190 Z"/>
      <path d="M118 182 Q 128 112 185 108 L 196 108 L 196 182 Z"/>
      <path d="M216 108 L 245 108 Q 285 112 302 182 L 216 182 Z"/>
      ${eye(250, 148, 11)}
      ${eye(282, 152, 9)}
      <rect x="15" y="178" width="370" height="112" rx="42"/>
      <path d="M205 182 L 205 262" fill="none"/>
      <rect x="220" y="200" width="30" height="12" rx="6"/>
      <circle cx="358" cy="204" r="13"/>
      <path d="M326 226 Q 349 242 372 224" fill="none"/>
      <rect x="12" y="215" width="26" height="18" rx="8"/>
      ${wheel(100, 292, 50)}
      ${wheel(300, 292, 50)}` },
    { id: "firetruck", name: "Пожежна машина", body: `
      <path d="M288 112 L 288 88 Q 304 70 320 88 L 320 112 Z"/>
      <path d="M258 300 L 258 132 Q 258 108 282 108 L 318 108 Q 345 108 355 138 L 378 200 Q 384 214 384 230 L 384 286 Q 384 300 368 300 Z"/>
      <path d="M282 130 L 318 130 Q 334 130 340 148 L 355 196 L 282 196 Z"/>
      ${eye(312, 162, 10)}
      <path d="M336 240 Q 356 256 376 238" fill="none"/>
      <rect x="18" y="160" width="252" height="140" rx="16"/>
      <rect x="60" y="138" width="20" height="26" rx="4"/>
      <rect x="210" y="138" width="20" height="26" rx="4"/>
      <rect x="22" y="104" width="250" height="36" rx="8"/>
      <path d="M72 104 L 72 140 M122 104 L 122 140 M172 104 L 172 140 M222 104 L 222 140" fill="none"/>
      <rect x="38" y="176" width="96" height="44" rx="8"/>
      <rect x="152" y="176" width="100" height="44" rx="8"/>
      <path d="M18 232 L 270 232 M18 262 L 270 262" fill="none"/>
      <rect x="358" y="270" width="34" height="24" rx="10"/>
      ${wheel(90, 300, 46)}
      ${wheel(312, 300, 46)}` },
    { id: "train", name: "Потяг", body: `
      <circle cx="352" cy="46" r="22"/>
      <circle cx="380" cy="22" r="14"/>
      <rect x="300" y="88" width="44" height="72"/>
      <rect x="290" y="72" width="64" height="24" rx="8"/>
      <rect x="168" y="100" width="104" height="170" rx="8"/>
      <rect x="156" y="86" width="128" height="26" rx="10"/>
      <rect x="190" y="132" width="60" height="56" rx="10"/>
      <rect x="258" y="150" width="90" height="112" rx="10"/>
      <path d="M300 150 L 300 262" fill="none"/>
      <circle cx="340" cy="206" r="54"/>
      ${eye(322, 192, 10)}
      ${eye(360, 192, 10)}
      <path d="M318 222 Q 341 242 364 222" fill="none"/>
      <rect x="160" y="256" width="232" height="30" rx="10"/>
      <rect x="140" y="250" width="28" height="14" rx="5"/>
      <circle cx="40" cy="138" r="24"/>
      <circle cx="84" cy="128" r="28"/>
      <circle cx="126" cy="140" r="20"/>
      <rect x="14" y="152" width="134" height="118" rx="12"/>
      <rect x="6" y="142" width="150" height="24" rx="8"/>
      <rect x="34" y="186" width="96" height="56" rx="10"/>
      ${wheel(48, 296, 32)}
      ${wheel(114, 296, 32)}
      ${wheel(208, 296, 36)}
      ${wheel(290, 296, 36)}
      ${wheel(362, 300, 28)}
      <path d="M4 340 L 396 340" fill="none"/>` },
    { id: "plane", name: "Літак", body: `
      <path d="M300 92 Q 296 70 320 70 Q 330 48 352 60 Q 376 54 378 76 Q 396 80 390 98 Z"/>
      <path d="M48 178 L 30 72 Q 30 60 44 62 L 70 66 Q 82 68 92 82 L 140 170 Z"/>
      <path d="M190 170 L 245 170 L 222 106 Q 218 98 208 98 L 192 98 Z"/>
      <path d="M44 172 Q 28 232 92 246 L 318 252 Q 388 248 388 206 Q 384 164 318 160 L 92 160 Q 60 160 44 172 Z"/>
      <path d="M296 172 Q 342 170 364 198 L 304 198 Z"/>
      ${eye(332, 186, 8)}
      <path d="M322 222 Q 348 240 374 220" fill="none"/>
      <circle cx="130" cy="196" r="14"/>
      <circle cx="175" cy="196" r="14"/>
      <circle cx="220" cy="196" r="14"/>
      <circle cx="265" cy="196" r="14"/>
      <path d="M46 204 L 118 204 L 86 236 Q 80 242 70 242 L 40 240 Z"/>
      <path d="M176 216 L 256 216 L 186 330 Q 180 340 166 340 L 142 340 Z"/>
      <path d="M232 380 Q 220 350 252 350 Q 262 324 292 336 Q 318 322 330 348 Q 366 346 356 380 Z"/>` },
    { id: "ship", name: "Кораблик", body: `
      <circle cx="56" cy="58" r="30"/>
      <path d="M56 10 L 56 18 M56 98 L 56 106 M8 58 L 16 58 M96 58 L 104 58 M22 24 L 28 30 M84 86 L 90 92 M22 92 L 28 86 M84 30 L 90 24" fill="none"/>
      <path d="M150 156 L 150 52" fill="none"/>
      <path d="M150 54 L 198 74 L 150 94 Z"/>
      <rect x="216" y="62" width="54" height="100" rx="6"/>
      <rect x="216" y="82" width="54" height="22"/>
      <rect x="100" y="148" width="200" height="90" rx="12"/>
      <rect x="122" y="168" width="44" height="40" rx="8"/>
      <rect x="178" y="168" width="44" height="40" rx="8"/>
      <rect x="234" y="168" width="44" height="40" rx="8"/>
      <path d="M14 232 L 386 232 L 344 322 Q 338 334 322 334 L 78 334 Q 62 334 56 322 Z"/>
      <path d="M46 296 L 354 296" fill="none"/>
      <circle cx="120" cy="264" r="15"/>
      <circle cx="180" cy="264" r="15"/>
      <circle cx="240" cy="264" r="15"/>
      <circle cx="300" cy="264" r="15"/>
      <path d="M4 332 Q 29 312 54 332 Q 79 352 104 332 Q 129 312 154 332 Q 179 352 204 332 Q 229 312 254 332 Q 279 352 304 332 Q 329 312 354 332 Q 379 352 396 334 L 396 392 L 4 392 Z"/>` },
  ]);
})();
