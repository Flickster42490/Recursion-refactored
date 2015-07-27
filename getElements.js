// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  //collection to store result
  var result = [];
  //need a recursive function
  var searchNodes = function(node) {
    //base case is to check whether node has children
    var classListArray = node.className.split(' ');
    if(!node.children) {
    
    } else {
      //check for positive class name ID
      if(node.className.indexOf(className) >= 0) {
        result.push(node);
      }
      //loop thru each node.children
      for(var i = 0; i < node.children.length; i++) {
        searchNodes(node.children[i]);
      }
    }
  };
  //call recursive function
  searchNodes(document.body);
  //return that collection
  return result;
};
