function getFirstSelector(selector) {
  var firstMatchingElement = document.querySelector(selector);
  return firstMatchingElement;
}

function nestedTarget() {
  var tar = document.querySelector('#nested .target');
// var text = document.getElementById('nested').querySelector('.target').innerHTML;
  return tar;
}

function deepestChild() {
  let nextElement = [];
  for (var i = 0; i < document.querySelectorAll('#grand-node div').length; i++) {
    nextElement.push(document.querySelectorAll('#grand-node div')[i]); debugger
  }

  return nextElement[nextElement.length-1];
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10) + n); debugger
  console.log(lis[i].innerHTML);
}
}
