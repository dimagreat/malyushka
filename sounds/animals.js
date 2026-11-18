// Real animal voices (best 1-4 seconds of each recording, cut and normalized). Sources: sounds/CREDITS.md
window.ANIMAL_SOUNDS = Object.fromEntries(
  ['cat', 'puppy', 'bunny', 'hamster', 'parrot', 'cow', 'pig', 'chicken', 'sheep',
   'whale', 'lion', 'elephant', 'zebra', 'owl', 'bear', 'squirrel']
    .map(id => [id, { src: 'sounds/' + id + '.m4a' }]));
// Animals that don't really make a sound get a playful effect instead
window.ANIMAL_EFFECTS = { fish: 'bubbles', octopus: 'bubbles', turtle: 'bubbles', crab: 'bubbles',
  butterfly: 'flutter', giraffe: 'boing', hedgehog: 'sniff' };
