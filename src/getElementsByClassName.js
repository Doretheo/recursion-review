// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var body = document.body;
  var matchedElems = [];
  var containsClass = function(element) {
    if (element.classList && element.classList.contains(className)) {
      matchedElems.push(element);
    }

    if (element.childNodes) {
      _.each(element.childNodes, function(node) {
        containsClass(node);
      });
    }
  };
  containsClass(body);
  return matchedElems;
};
