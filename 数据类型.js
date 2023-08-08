/* 
判断数据类型的方法
(1) typeof
(2) instanceof
(3) ===
 */

var a
console.log(a, typeof a) // undefined undefined

console.log(typeof a === "undefined") // true

console.log(a === undefined) // true

console.log(undefined === "undefined") // false

a = 3

console.log(typeof a === "number") // true

a = "Jamal Murray"

console.log(typeof a === "string") // true

console.log(typeof a === "String") // false

a = true
console.log(typeof a === "boolean") // true

a = null
console.log(typeof a) // object

var b = {
    b1: [a, "123", console.log],
    b2: function () {
        console.log(2)
        return function () {
            return "AK-103"
        }
    }
}
console.log(b instanceof Object) // true
console.log(b instanceof Array) // false
console.log(b.b1 instanceof Object) // true
console.log(b.b1 instanceof Array) // true
console.log(b.b2 instanceof Function) // true
console.log(b.b2 instanceof Object) // true

console.log(typeof undefined) // undefined
console.log(typeof null) // object

console.log(typeof b) // object
console.log(typeof b.b1) // object
console.log(typeof b.b2) // function
console.log(typeof b.b1[2]) // function
console.log(typeof console.log) // function
b.b1[2](6) // 6
console.log(b.b2()()) // AK-103
