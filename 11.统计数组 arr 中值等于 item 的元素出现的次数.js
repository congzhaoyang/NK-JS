function count(arr, item) {
  var count = 0
  arr.forEach(function(element) {
    element === item ? count++ : ''
  }, this);
  return count
}

function count1(arr, item) {
    var count = arr.filter((element) => {
        if(element === item) {
            return element
        }
    })
    return count.length
}

var arr = [1, 3, 3, 4, 5]
var item = 3
console.log(count(arr, item))
console.log(count1(arr, item))