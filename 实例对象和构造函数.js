function Person(name, age) {
    this.name = name
    this.age = age
}

var p = new Person("Butler", 28)
console.log(p.age) // 28
console.log(p.name) // Butler
console.log(p instanceof Person) // true
console.log(p instanceof Object) // true

Person.prototype.sayHi = function () {
    return "hello " + this.name
}
console.log(p.sayHi()) // hello Butler

