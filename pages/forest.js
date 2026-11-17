(function () {
  const { add, eye } = (typeof window !== "undefined" ? window : globalThis).COLORING;
  void eye;
  add("forest", [
    { id: "squirrel", name: "Білочка", body: `
      <path d="M205 335 C 95 345 35 265 55 185 C 70 115 150 65 195 105 C 230 140 205 195 168 182 C 152 230 182 282 220 300 Z"/>
      <path d="M95 160 C 110 130 140 115 165 125" fill="none"/>
      <path d="M80 230 C 85 200 100 185 120 180" fill="none"/>
      <ellipse cx="255" cy="285" rx="70" ry="80"/>
      <ellipse cx="272" cy="298" rx="40" ry="55"/>
      <path d="M248 140 L238 82 L280 128 Z"/>
      <path d="M292 128 L318 80 L324 140 Z"/>
      <circle cx="288" cy="175" r="52"/>
      <circle cx="305" cy="162" r="9" fill="#000"/><circle cx="308.15" cy="158.85" r="2.6999999999999997" fill="#fff" stroke="none"/>
      <circle cx="338" cy="186" r="6" fill="#000"/>
      <path d="M312 200 Q 322 210 334 200" fill="none"/>
      <circle cx="290" cy="198" r="10"/>
      <ellipse cx="302" cy="262" rx="22" ry="26"/>
      <path d="M276 252 Q 302 220 328 252 Z"/>
      <path d="M302 232 L305 220" fill="none"/>
      <ellipse cx="278" cy="262" rx="13" ry="10"/>
      <ellipse cx="326" cy="262" rx="13" ry="10"/>
      <ellipse cx="228" cy="362" rx="36" ry="15"/>
      <ellipse cx="300" cy="362" rx="36" ry="15"/>` },
    { id: "bear", name: "Ведмедик", body: `
      <circle cx="140" cy="105" r="30"/><circle cx="140" cy="105" r="14"/>
      <circle cx="260" cy="105" r="30"/><circle cx="260" cy="105" r="14"/>
      <ellipse cx="200" cy="295" rx="88" ry="85"/>
      <ellipse cx="200" cy="305" rx="52" ry="58"/>
      <circle cx="200" cy="160" r="72"/>
      <ellipse cx="200" cy="188" rx="34" ry="26"/>
      <circle cx="172" cy="150" r="10" fill="#000"/><circle cx="175.5" cy="146.5" r="3" fill="#fff" stroke="none"/><circle cx="228" cy="150" r="10" fill="#000"/><circle cx="231.5" cy="146.5" r="3" fill="#fff" stroke="none"/>
      <ellipse cx="200" cy="176" rx="12" ry="8" fill="#000"/>
      <path d="M200 184 L200 196 M200 196 Q 190 206 180 198 M200 196 Q 210 206 220 198" fill="none"/>
      <ellipse cx="118" cy="270" rx="22" ry="40" transform="rotate(25 118 270)"/>
      <ellipse cx="282" cy="270" rx="22" ry="40" transform="rotate(-25 282 270)"/>
      <ellipse cx="155" cy="365" rx="36" ry="20"/><ellipse cx="155" cy="365" rx="16" ry="9"/>
      <ellipse cx="245" cy="365" rx="36" ry="20"/><ellipse cx="245" cy="365" rx="16" ry="9"/>` },
    { id: "owl", name: "Совеня", body: `
      <rect x="20" y="335" width="360" height="26" rx="13"/>
      <path d="M130 90 L120 40 L165 75 Z"/>
      <path d="M270 90 L280 40 L235 75 Z"/>
      <ellipse cx="200" cy="210" rx="105" ry="135"/>
      <path d="M100 190 C 60 240 75 300 120 320 C 120 260 115 220 100 190 Z"/>
      <path d="M300 190 C 340 240 325 300 280 320 C 280 260 285 220 300 190 Z"/>
      <ellipse cx="200" cy="265" rx="62" ry="70"/>
      <path d="M170 240 Q 180 252 190 240 M210 240 Q 220 252 230 240 M180 270 Q 190 282 200 270 M200 270 Q 210 282 220 270 M170 300 Q 180 312 190 300 M210 300 Q 220 312 230 300" fill="none" stroke-width="4"/>
      <circle cx="160" cy="140" r="38"/><circle cx="240" cy="140" r="38"/>
      <circle cx="160" cy="140" r="16" fill="#000"/><circle cx="165.6" cy="134.4" r="4.8" fill="#fff" stroke="none"/><circle cx="240" cy="140" r="16" fill="#000"/><circle cx="245.6" cy="134.4" r="4.8" fill="#fff" stroke="none"/>
      <path d="M188 170 L212 170 L200 192 Z"/>
      <path d="M170 335 L172 350 M185 335 L185 352 M215 335 L215 352 M230 335 L228 350" fill="none"/>` },
    { id: "hedgehog", name: "Їжачок", body: `
      <path d="M83.0 270.0 L46.5 252.2 L87.5 245.5 L58.6 218.1 L100.8 223.0 L81.6 188.1 L121.7 204.2 L113.9 164.8 L148.5 190.9 L152.7 150.1 L179.1 183.9 L195.0 145.0 L210.9 183.9 L237.3 150.1 L241.5 190.9 L276.1 164.8 L268.3 204.2 L308.4 188.1 L289.2 223.0 L331.4 218.1 L302.5 245.5 L343.5 252.2 L307.0 270.0 Z"/>
      <ellipse cx="200" cy="270" rx="115" ry="70"/>
      <path d="M280 228 C 320 225 360 260 372 290 C 340 312 300 312 278 300 C 265 275 265 245 280 228 Z"/>
      <circle cx="372" cy="290" r="9" fill="#000"/>
      <circle cx="318" cy="262" r="8" fill="#000"/><circle cx="320.8" cy="259.2" r="2.4" fill="#fff" stroke="none"/>
      <path d="M335 298 Q 345 304 355 298" fill="none"/>
      <circle cx="140" cy="132" r="32"/>
      <path d="M140 100 Q 145 85 158 80" fill="none"/>
      <path d="M150 92 Q 175 75 185 95 Q 165 100 150 92 Z"/>
      <ellipse cx="150" cy="345" rx="26" ry="13"/>
      <ellipse cx="250" cy="345" rx="26" ry="13"/>` },
    { id: "butterfly", name: "Метелик", body: `
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
      <circle cx="200" cy="125" r="20"/>` },
  ]);
})();
