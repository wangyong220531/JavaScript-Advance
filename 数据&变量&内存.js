// 数据：存储在内存中，表示特定信息的东西

// 内存：内存条通电后产生的的可以存储数据的空间

/* 
变量：可以改变的量，由变量名和变量值组成
每个变量都对应一块小内存
变量名用来查找对应的内存，变量值就是内存中保存的数据
 */

/* 
变量赋值：
将一个变量的内容拷贝一份放在变量的内存里
 */

var a = 12
// a内存中保存的就是12

var b = {
    name: "Jokic",
    age: 32
}
// b中保存的是该对象的地址值

var a = "abc"
var b = a
// b中保存的是"abc"

var obj1 = { name: "Fanbo Zeng" }
var obj2 = obj1
obj2.age = 20
// console.log(obj1) // { name: 'Fanbo Zeng', age: 20 }
function fn(obj) {
    obj.name = "Ak"
}
fn(obj1)
// console.log(obj1) // { name: 'Ak', age: 20 }

var a = { age: 12 }
var b = a
a = { name: "Jamal" }
console.log(a.age, b.age, a.name, b.name) // undefined 12 Jamal undefined
var a = { age: 12 }
var b = a
a = { name: "James", age: 13 }
console.log(a.age, b.age, a.name, b.name) // 13 12 James undefined
b.age = 14
console.log(a.age, b.age, a.name, b.name) // 13 14 James undefined
function fn1(obj) {
    obj = { name: "Jokic" }
}
fn1(a)
console.log(a.age, b.age, a.name, b.name) // 13 14 James undefined
// 当函数执行完毕后，内部的局部变量会被自动释放，变成了垃圾对象

var a = 3
function fn(a) {
    a = a + 1
}
fn(a)
console.log(a) // 3
