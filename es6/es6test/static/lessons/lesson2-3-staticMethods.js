// // es5
// let Animal = function (type) {
//     this.type = type

// }
// //绑定行为到对象的原型链
// Animal.prototype.eat = function () {
//     Animal.walk()
//     console.log('i am eating')

// }
// Animal.walk = function () {
//     console.log('i am walking')
// }
// let dog = new Animal('dog')
// dog.eat()


// es6
class Animal {
    // 构造函数
    constructor(type) {
        this.type = type
    }
    eat() {
        Animal.walk()
        console.log('i am eating food')
    }
    static walk() {
        console.log('i am walking')
    }
}
let dog = new Animal('dog')
dog.eat()

