var words = ["ground", "control", "to", "major", "tom"];

function map (arr, callback) {
  var word = [];
  for (var i = 0; i < arr.length; i++) {
    word.push(callback(arr[i]));
  };
// return a new array based on the results of the callback function.
  return word;
}


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(map(words, function(word) {
  return word.length
}));




