const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

destructivelyAppendKitten('Ralph');

kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

destructivelyPrependKitten('Bob');

kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

kittens = ['Milo', 'Otis', 'Garfield'];

function appendKitten(name) {
  var newKittens = [...kittens];
  newKittens.push(name);
}

appendKitten('Broom');

kittens = ['Milo', 'Otis', 'Garfield'];

function prependKitten(name) {
  var newKittens = [...kittens];
  newKittens.unshift(name);
}

prependKitten('Arnold');

kittens = ['Milo', 'Otis', 'Garfield'];