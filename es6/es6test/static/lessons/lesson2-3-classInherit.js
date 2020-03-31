// // es5
// let Animal = function (type) {
//     this.type = type
// }
// // 绑定行为到对象的原型链
// Animal.prototype.eat = function () {
//     Animal.walk()
//     console.log('i am eating')
// }
// Animal.walk = function () {
//     console.log('i am walking')
// }
// let Dog = function () {
//     // 初始化父类的构造函数，call用来改变this的指针使this指向dog的实例
//     Animal.call(this, 'dog')
//     this.run = function () {
//         console.log('i can run')
//     }
// }
// Dog.prototype = Animal.prototype


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
class Dog extends Animal {
    //如果子类的构造函数是空，可忽略不写
    constructor(type) {
        //显示实现constructor，super()需要写在第一行
        super(type)
        this.age = 2
    }
}

