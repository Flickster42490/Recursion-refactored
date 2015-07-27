// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //recursing through array
  if(Array.isArray(obj)){
    var result = [];
    for(var i=0;i<obj.length;i++){
      if(obj[i]===undefined && typeof obj[i] === 'function'){
        result.push(stringifyJSON(null));
      } else {
        result.push(stringifyJSON(obj[i]));
      }
    }
    return '[' + result.join(',') + ']';
  }
  //recursing through object
    //account for null
  if(obj && typeof obj === 'object'){
    var result = [];
    for(var key in obj){
      if(obj[key]!==undefined && typeof obj[key] !== 'function'){
        result.push(stringifyJSON(key)+":"+stringifyJSON(obj[key]));
      }
    }
    return '{' + result.join(',') + '}';
  }

//stringify the primitives
  if(typeof obj==='string'){
    return '"' + obj + '"';
  }
  return '' + obj;
};
