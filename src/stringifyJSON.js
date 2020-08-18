// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // if string (add double quotes)
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  // if boolean (add with single quotes)
  // if number (add with single quotes)
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  // if null (return 'null')
  if (obj === null) {
    return 'null';
  }


  // empty array (return '[]')
  if (Array.isArray(obj)) {
    var res = [];
    if (obj.length === 0) {
      return '[]';
    } else {
      _.each(obj, function(element) {
        res.push(stringifyJSON(element));
      });
      return '[' + res.join(',') + ']';
    }
  }

  if (typeof obj === 'object' && obj !== null) {
    var objectRes = [];
    _.each(obj, function(value, key) {
      if (typeof value !== 'function' && value !== undefined) {
        objectRes.push(stringifyJSON(key) + ':' + stringifyJSON(value));
      }
    });
    return '{' + objectRes.join(',') + '}';
  }
  // filled array (using each result array pushing new element recursively)
  // objects (function)
};