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
      parseInt(lis, 10)
     var newRank = (lis.innertHTML, 10)[i]+n  
    }
    return newRank
  }
  
