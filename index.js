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
     lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
    
  }
  
}
function deepestChild() {
 var deepChild = document.getElementById('grand-node').querySelectorAll('div')
 var arrayDeep = [];
 for (let i=0; i < deepChild.length; i++) {
   arrayDeep.push(deepChild[i].innerText) 
   }
   return arrayDeep.pop()
  
  
  
  
}