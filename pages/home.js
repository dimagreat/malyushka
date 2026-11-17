(function () {
  const { add, eye } = (typeof window !== "undefined" ? window : globalThis).COLORING;
  void eye;
  add("home", [
    { id: "cat", name: "Котик", body: `
      <path d="M255 345 C 350 355 375 265 335 232 C 322 222 305 236 318 250 C 342 275 330 320 255 322 Z"/>
      <ellipse cx="200" cy="290" rx="82" ry="85"/>
      <ellipse cx="200" cy="305" rx="46" ry="55"/>
      <path d="M142 140 L132 68 L190 108 Z"/>
      <path d="M258 140 L268 68 L210 108 Z"/>
      <path d="M150 128 L146 92 L172 112 Z"/>
      <path d="M250 128 L254 92 L228 112 Z"/>
      <circle cx="200" cy="170" r="72"/>
      <circle cx="172" cy="160" r="11" fill="#000"/><circle cx="175.85" cy="156.15" r="3.3" fill="#fff" stroke="none"/><circle cx="228" cy="160" r="11" fill="#000"/><circle cx="231.85" cy="156.15" r="3.3" fill="#fff" stroke="none"/>
      <path d="M192 186 L208 186 L200 196 Z" fill="#000"/>
      <path d="M200 196 Q 190 212 178 204 M200 196 Q 210 212 222 204" fill="none"/>
      <path d="M160 190 L110 182 M160 198 L112 204 M240 190 L290 182 M240 198 L288 204" fill="none" stroke-width="4"/>
      <ellipse cx="168" cy="368" rx="30" ry="16"/>
      <ellipse cx="232" cy="368" rx="30" ry="16"/>` },
    { id: "bunny", name: "Зайчик", body: `
      <ellipse cx="165" cy="85" rx="24" ry="68" transform="rotate(-12 165 85)"/>
      <ellipse cx="165" cy="90" rx="11" ry="48" transform="rotate(-12 165 90)"/>
      <ellipse cx="235" cy="85" rx="24" ry="68" transform="rotate(12 235 85)"/>
      <ellipse cx="235" cy="90" rx="11" ry="48" transform="rotate(12 235 90)"/>
      <circle cx="275" cy="320" r="24"/>
      <ellipse cx="200" cy="295" rx="80" ry="80"/>
      <ellipse cx="200" cy="305" rx="45" ry="52"/>
      <circle cx="200" cy="185" r="62"/>
      <circle cx="176" cy="175" r="10" fill="#000"/><circle cx="179.5" cy="171.5" r="3" fill="#fff" stroke="none"/><circle cx="224" cy="175" r="10" fill="#000"/><circle cx="227.5" cy="171.5" r="3" fill="#fff" stroke="none"/>
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
      <ellipse cx="240" cy="370" rx="34" ry="16"/>` },
    { id: "puppy", name: "Цуценя", body: `
      <path d="M262 300 C 300 290 320 250 338 218 C 346 204 368 214 360 230 C 340 275 310 320 262 330 Z"/>
      <ellipse cx="200" cy="290" rx="82" ry="85"/>
      <ellipse cx="200" cy="305" rx="46" ry="55"/>
      <circle cx="200" cy="168" r="72"/>
      <path d="M150 116 C 110 108 92 168 106 214 C 114 236 146 228 150 200 C 154 172 164 138 150 116 Z"/>
      <path d="M250 116 C 290 108 308 168 294 214 C 286 236 254 228 250 200 C 246 172 236 138 250 116 Z"/>
      ${eye(176, 152, 11)}${eye(224, 152, 11)}
      <ellipse cx="200" cy="200" rx="40" ry="27"/>
      <path d="M188 212 L188 226 Q 188 242 200 242 Q 212 242 212 226 L212 212 Z"/>
      <ellipse cx="200" cy="188" rx="13" ry="9" fill="#000"/>
      <path d="M200 196 L200 208 M200 208 Q 190 218 180 208 M200 208 Q 210 218 220 208" fill="none"/>
      <ellipse cx="168" cy="368" rx="30" ry="16"/>
      <ellipse cx="232" cy="368" rx="30" ry="16"/>` },
    { id: "hamster", name: "Хом'ячок", body: `
      <circle cx="128" cy="130" r="30"/>
      <circle cx="128" cy="130" r="15"/>
      <circle cx="272" cy="130" r="30"/>
      <circle cx="272" cy="130" r="15"/>
      <ellipse cx="200" cy="245" rx="125" ry="120"/>
      <ellipse cx="200" cy="300" rx="72" ry="62"/>
      ${eye(165, 188, 12)}${eye(235, 188, 12)}
      <circle cx="140" cy="228" r="24"/>
      <circle cx="260" cy="228" r="24"/>
      <rect x="189" y="221" width="22" height="18" rx="4"/>
      <path d="M190 206 L210 206 L200 216 Z" fill="#000"/>
      <path d="M200 216 L200 222 M200 222 Q 190 230 180 222 M200 222 Q 210 230 220 222" fill="none"/>
      <ellipse cx="200" cy="292" rx="24" ry="32"/>
      <ellipse cx="176" cy="308" rx="17" ry="14"/>
      <ellipse cx="224" cy="308" rx="17" ry="14"/>
      <ellipse cx="150" cy="364" rx="32" ry="16"/>
      <ellipse cx="250" cy="364" rx="32" ry="16"/>` },
    { id: "parrot", name: "Папуга", body: `
      <path d="M176 290 L160 385 L240 385 L224 290 Z"/>
      <path d="M186 330 L182 385 M214 330 L218 385" fill="none"/>
      <rect x="40" y="300" width="320" height="30" rx="15"/>
      <ellipse cx="183" cy="76" rx="13" ry="32" transform="rotate(-25 183 76)"/>
      <ellipse cx="217" cy="76" rx="13" ry="32" transform="rotate(25 217 76)"/>
      <ellipse cx="200" cy="68" rx="14" ry="34"/>
      <ellipse cx="200" cy="232" rx="74" ry="78"/>
      <path d="M138 190 C 108 225 112 285 160 302 C 168 262 166 222 138 190 Z"/>
      <path d="M262 190 C 292 225 288 285 240 302 C 232 262 234 222 262 190 Z"/>
      <circle cx="200" cy="135" r="64"/>
      ${eye(172, 128, 11)}${eye(228, 128, 11)}
      <path d="M176 152 Q 200 134 224 152 Q 232 182 206 206 Q 196 212 197 202 Q 182 180 176 152 Z"/>
      <ellipse cx="178" cy="304" rx="16" ry="11"/>
      <ellipse cx="222" cy="304" rx="16" ry="11"/>` },
  ]);
})();
