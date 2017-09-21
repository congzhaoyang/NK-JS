function insert(arr, item, index) {
  var resultArr = arr.slice(0)
  var left = resultArr.slice(0, index)
  var right = resultArr.slice(index, arr.length)
  var resultArr = left.concat(item, right)
  return resultArr
}

var arr = [1, 2, 3, 5]
var index = 2
var item = 6
console.log(insert(arr, item, index))