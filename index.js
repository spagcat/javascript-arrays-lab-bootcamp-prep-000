const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

  kittens;

destructivelyAppendKitten('Ralph');

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

  kittens;

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
  var appendKittens = [kittens, ...name];
}

appendKitten('Broom');

function prependKitten(name) {
  kittens;
  var prependKittens = kittens.unshift(name);
}

prependKitten('Arnold');