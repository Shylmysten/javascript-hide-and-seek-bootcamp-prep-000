function getFirstSelector(selector) {
  var firstMatchingElement = document.querySelector(selector);
  return firstMatchingElement;
}

function nestedTarget() {
  var tar = document.getElementById('nested').querySelector('.target');
  return tar;
}

function deepestChild() {
  var dc = document.querySelector('#grand-node div div div div');
  return dc;
}
