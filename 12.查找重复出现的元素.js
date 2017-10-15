function duplicates(arr) {
  var result = []
  var temp = arr.sort()
  for(var i = 0; i < temp.length; i++) {
    if((temp[i] === temp[i + 1]) && (result.indexOf(temp[i]) === -1)) {
      result.push(temp[i])
    }
  }
}

var arr = [1, 5, 2, 3, 1, 3]
console.log(duplicates(arr))