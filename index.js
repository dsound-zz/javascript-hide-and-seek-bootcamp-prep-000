function getFirstSelector(selector) {
  var element = document.querySelector(selector)
  return element
}

<<<<<<< HEAD

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
  
  



=======
function nestedTarget() {
 var nestedEl = document.querySelector('#nested .target')
 return nestedEl
 
}

function increaseRankBy(n) {
  
}
>>>>>>> fd8097924ba1233b7430925754a3d57df1299dfa
