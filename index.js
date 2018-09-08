

function getFirstSelector(selector) {
 var first = document.querySelector(selector);
 return first 
}

function nestedTarget() {
  var target = document.querySelector("div.target");
  return target
}

function increaseRankBy(n) {
 
  const rankedList = document.querySelectorAll(".ranked-list");
  for (let i=0; i<rankedList.length; i++) {
  var finalRank = parseInt(rankedList[i] + n) 
  
  rankedList[i].innerHTML = finalRank }
  
}  


   


function deepestChild() {

  var target = document.getElementbyId('grand-node').querySelectorAll('div');
  for (let i = 0; i < target.length; i++) {
    
    var deepChild = target.children[i];
    }
    return deepChild
  }
  
  



