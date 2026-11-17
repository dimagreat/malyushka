// Coloring pages core: categories + helpers. Category files (pages/*.js) call COLORING.add(...).
// Drawing rules: viewBox 0 0 400 400, shapes drawn back-to-front with white fill so overlaps
// hide lines behind them. The app turns white into transparent, so only black lines stay on top.
(function (g) {
  const wrap = body => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="800" height="800">` +
    `<rect width="400" height="400" fill="#fff"/>` +
    `<g fill="#fff" stroke="#000" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">${body}</g></svg>`;
  // eye with a little white highlight
  const eye = (x, y, r = 9) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#000"/><circle cx="${x + r * .35}" cy="${y - r * .35}" r="${r * .3}" fill="#fff" stroke="none"/>`;

  const CATEGORIES = [
    { id: 'home',    name: 'Домашні', icon: '🐱' },
    { id: 'farm',    name: 'Ферма',   icon: '🐮' },
    { id: 'sea',     name: 'Морські', icon: '🐠' },
    { id: 'savanna', name: 'Саванна', icon: '🦁' },
    { id: 'forest',  name: 'Ліс',     icon: '🌲' },
  ];
  const PAGES = [];
  function add(cat, list) {
    list.forEach(p => PAGES.push({ id: p.id, name: p.name, cat, svg: wrap(p.body) }));
  }
  g.COLORING = { CATEGORIES, PAGES, add, eye, wrap };
})(typeof window !== 'undefined' ? window : globalThis);
