function removeWithoutCopy(arr, item) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === item) {
      arr.splice(i, 1)
      i--
    }
  }
  return arr
}


//使用while判断是否含有item，如果含有则splice之
function removeWithoutCopy2(arr, item) {
  while(arr.indexOf(item) !== -1) {
    arr.splice(arr.indexOf(item), 1)
  }
  return arr
}

var arr = [1, 3, 5, 6]
var item = 5
console.log(removeWithoutCopy(arr, item))
console.log(removeWithoutCopy2(arr, item))