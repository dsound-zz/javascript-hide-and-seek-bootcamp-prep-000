

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

  var targetNode = document.querySelector('#grand-node');
  var nextNode = targetNode.children[0]
  while (nextNode) {
    targetNode = nextNode
    nextNode = targetNode.children[0]
  }
  return targetNode 
  }
  
  



