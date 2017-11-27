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

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10) + n); debugger
  console.log(lis[i].innerHTML);
}
}
