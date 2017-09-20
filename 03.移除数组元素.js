//如果不存在则push方法
function remove1 (arr, item) {
  var result = []
  for(var i = 0; i < arr.length; i++) {
      if(arr[i] !== item) {
          result.push(arr[i])
      }
  }
  return result
}

//使用filter方法
function remove2 (arr, item) {
  return arr.filter((ele) => { //这里要return,使用ES6
      return ele != item
  })
}

var arr = [1, 2, 5, 3, 4, 3]
var item = 3
console.log(remove1(arr, item))
console.log(remove2(arr, item))