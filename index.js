function getFirstSelector(selector) {  //PASSING
  //return the first element that matches
  var mySelector = document.querySelector(selector);
  return mySelector;
};


function nestedTarget() { //PASSING
  //pulls a .target out of #nested
  var myTarget = document.querySelector('#nested .target')
  return myTarget;
}

function increaseRankBy(n) {
  //increases the rank in all the .ranked-list by n
  const lis = document
      .getElementById('app')
      .querySelectorAll('ul.ranked-list li');

    for (let i = 0; i < lis.length; i++) {
    //  lis[i].innerHTML = (i + increaseRank).toString();
      lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
    }

};

function deepestChild() {
  return document.querySelector('main#app div#grand-node div div div div');
}
