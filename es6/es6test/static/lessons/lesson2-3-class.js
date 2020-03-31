// // es5
// let Animal = function (type) {
//     this.type = type
// }
// //绑定行为到对象的原型链
// Animal.prototype.eat = function () {
//     console.log('i am eating')
// }

// let dog = new Animal('dog')
// let monkey = new Animal('monkey')
// monkey.constructor.prototype.eat = function () {
//     console.log('monkey is eating')
// }

// dog.eat()
// monkey.eat()

//es6   es5用原型链声明class的语法糖
class Animal {
    //构造函数
    constructor(type) {
        this.type = type
    }
    eat() {
        console.log('i am eating food')
    }
}

let dog = new Animal('dog');
let monkey = new Animal('monkey')
console.log(dog)
console.log(monkey)
dog.eat()
monkey.eat()

console.log(typeof Animal)//function