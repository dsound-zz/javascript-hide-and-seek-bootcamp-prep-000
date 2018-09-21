function getFirstSelector(selector) {
  var element = document.querySelector(selector); 
  return element
}

function nestedTarget() {
  var target = document.querySelector('#nested .target');
  return target
}

function increaseRankBy(n) {
   var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li') 
    for (let i = 0; i < lis.length; i++) {
      
     var newRank = parseInt(lis[i].innertHTML, 10)+n  
    }
    return newRank
  }
  
