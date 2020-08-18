// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var value = '';
  // string
  if (json === 'null') {
    return null;
  }
  // numbers booleans
  // null
  // array empty array
  // objects
};
