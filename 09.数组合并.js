function concat(arr1, arr2) {
  var resultArr = arr1.slice(0)
  for(var i = 0; i < arr2.length; i++) {
      resultArr.push(arr2[i])
  }
  return resultArr
} 

var arr1 = [1, 2]
    arr2 = [3, 4]
console.log(concat(arr1, arr2))