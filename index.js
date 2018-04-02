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
  var originalkittens = kittens;
  var appendKittens = kittens.push(name);
}

appendKitten('Broom');

function prependKitten(name) {
  kittens;
  var prependKittens = kittens.unshift(name);
}

prependKitten('Arnold');