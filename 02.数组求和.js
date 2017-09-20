//比较容易想到的，用for循环遍历后相加
function sum1 (arr) {
  var result = 0
  for(var i = 0; i < arr.length; i++) {
      result += arr[i]
  }
  return result
}

//使用递归完成相加，加入了数组长度判断，使用了slice函数
function sum2 (arr) {
  var len = arr.length
  if(len === 0) {
    return 0
  } else if(len === 1) {
    return arr[0]
  } else {
    return arr[0] + sum2(arr.slice(1))
  }
}

//函数式编程，使用了map-reduce
function sum3 (arr) {
  return arr.reduce(function(prev, curr) {
    return prev + curr
  })
}


//使用for each
function sum4 (arr) {
  var result = 0
  arr.forEach(function(element) {
    result += element
  }, this);
  return result
}

//使用eval
function sum5 (arr) {
  return eval(arr.join('+'))
}


var arr = [1, 3, 5]
console.log(`sum1=${sum1(arr)}`)
console.log(`sum2=${sum2(arr)}`)
console.log(`sum3=${sum3(arr)}`)
console.log(`sum4=${sum4(arr)}`)
console.log(`sum5=${sum5(arr)}`)