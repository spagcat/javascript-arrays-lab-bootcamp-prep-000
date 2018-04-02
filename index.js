const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens;
  kittens.push(name);
}

destructivelyAppendKitten('Ralph');

function destructivelyPrependKitten(name) {
  kittens;
  kittens.unshift(name);
}

destructivelyPrependKitten('Bob');

function destructivelyRemoveLastKitten() {
  kittens;
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens;
  kittens.shift();
}

function appendKitten(name) {
  kittens;
  var newKittens = kittens.push(name);
  kittens = kittens
}

appendKitten('Broom');

function prependKitten(name) {
  kittens;
  var newKittens = kittens.unshift(name);
  return newKittens;
}

prependKitten('Arnold');