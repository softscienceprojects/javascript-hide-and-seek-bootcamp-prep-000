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
  // analyse string, returns a number
  var increaseRank = parseInt(n); //set a variable that parses the input
  var foo = document.querySelectorAll('ul.ranked-list li'); //get the li's and set them as a variable
    for (let i = 0; i < foo.length; i++) {
      foo[i].innerHTML = (i + increaseRank).toString();
    }


};

function deepestChild() {
  var meep = document.querySelector('main#app div#grand-node div div div div');

  return meep.innerHTML;
}
