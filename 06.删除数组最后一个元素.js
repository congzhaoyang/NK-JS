//数组是

function truncate(arr) {
  var result = arr.slice()
  if(arr.length === 0) {
    return arr
  } else {
    return result.splice(0, arr.length - 1)
  }
}

var arr = [1, 3, 5]
console.log(truncate(arr))