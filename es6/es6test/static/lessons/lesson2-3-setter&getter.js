let _age = 4
class Animal {
    //构造函数
    constructor(type) {
        this.type = type
    }
    get age() {
        return _age
    }
    set age(val) {
        if (val > 4 && val < 7) {
            _age = val
        }
    }
    eat() {
        console.log('i am eating food')
    }
} 


let dog = new Animal('dog')
console.log(dog.age)
dog.age = 5
console.log(dog.age)
