function indexOf(arr, item) {
  if(Array.prototype.indexOf) {
    return(arr.indexOf(item))
  } else {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        return i
      }
    }
  }
  return -1
}

var arr = [1, 3, 5, 6]
var item = 2 
console.log(indexOf(arr, item))

