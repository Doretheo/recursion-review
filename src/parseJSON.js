// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var value = '';
  var resultArray = [];
  var resultObject = {};
  // string
  if (json[0] === '"' && json[json.length - 1] === '"') {
    if (json.length === 2) {
      return '';
    } else {
      json = json.substring(1, json.length - 1);
      return json;
    }
  }
  // numbers booleans
  if (json === 'true') {
    return true;
  }
  if (json === 'false') {
    return false;
  }
  // null
  if (json === 'null') {
    return null;
  }

  // array empty array
  if (json[0] === '[' && json[json.length - 1] === ']') {
    if (json.length === 2) {
      return [];
    } else {
      var arr = [];
      arr = json.substring(1, json.length - 1).split(',');
      _.each(arr, function(elem) {
        resultArray.push(parseJSON(elem));
      });
      return resultArray;
    }
  }
  // objects
  if (json[0] === '{' && json[json.length - 1] === '}') {
    json = json.substring(1, json.length - 1);

    if (json.length === 0) {
      return {};
    } else {
      var a = json.split(',');
      _.each(a, function(elem) {
        var b = elem.split(':');
        b[1] = b[1].slice(1);
        resultObject[parseJSON(b[0])] = parseJSON(b[1]);
      });
      return resultObject;
    }
  }
};

'["one", "two"]';

'{"foo": "bar", "doo": "car"}';