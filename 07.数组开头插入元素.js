//使用了数组的unshift方法，可在开头添加元素。
//并且，直接return result.unshift得到的是result.length，要先做result.unshift(item)再return result

function prepend(arr, item) {
  var result = arr.slice()
  result.unshift(item)
  return result
}

var arr = [1, 3]
var item = 0
console.log(prepend(arr, item))
