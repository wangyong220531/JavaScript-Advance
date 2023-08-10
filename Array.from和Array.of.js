// Array.from()类数组对象或可迭代对象转换为数组

const arr = [1, 2, 3]

console.log(Array.from(arr)) // [1,2,3]

console.log(Array.from(arr) === arr) // false

console.log(Array.from("foo")) // [ 'f', 'o', 'o' ]

// Array.of()将一组参数转换为数组

console.log(Array.of("f", "o", "o")) // [ 'f', 'o', 'o' ]
console.log(Array.of(1, 2, 3)) // [ 1, 2, 3 ]
