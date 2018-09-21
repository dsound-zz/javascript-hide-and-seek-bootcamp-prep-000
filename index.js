function getFirstSelector(selector) {
  var element = document.querySelector(selector); 
  return element
}

function nestedTarget() {
  var target = document.querySelector('#nested .target');
  return target
}

function increaseRankBy(n) {
   var rankedList = document.getElementById('app').querySelectorAll('ul.ranked-list li') 
    for (let i = 0; i < rankedList.length; i++) {
      var increasedRank = parseInt(rankedList.innerHTML, 10)[i + n]
    }
    return increasedRank
  }
  
