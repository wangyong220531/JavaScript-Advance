/*
对象:
（1）多个数据的封装体
（2）用来保存多个数据的容器
（3）一个对象代表现实生活中的一个事物
 */

/*
为什么要使用对象？
 统一管理多个数据
 */

var obj = {
    name: "Jamal Murray",
    age: 28,
    setName: function (name) {
        this.name = name
    },
    setAge: function (age) {
        this.age = age
    }
}

obj.setName("Kobe Bryant")
console.log(obj) // { name: 'Kobe Brant', age: 28, setName: [Function: setName] }
obj["setName"]("Jokic")
console.log(obj) // { name: 'Jokic', age: 28, setName: [Function: setName] }

/* 
对象的组成
（1）属性：属性名（字符串类型）和属性值（任意类型）组成
（2）方法：一种特别的属性（属性值是函数）
 */

var p = {}
var propName = "gender"
var value = "男"
p[propName] = value
console.log(p) // { gender: '男' }

var obj1 = {}
function test1(){
    this.name = "盲僧1"
}
// test1.call(obj1)
// console.log(obj1); // { name: '盲僧' }

test1.apply(obj1)
console.log(obj1); // { name: '盲僧1' }

