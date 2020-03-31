// es5  参数默认值

// function f(x, y, z) {
//     if (y === undefined) {
//         y = 7
//     }
//     return x + y + z;
// }
// console.log(f(1, 8))

// es6 
// function f(x, y = 7, z = 42) {
//     return x + y + z
// }
// // undefined 可以跳过中间有默认值的参数
// console.log(f(1, undefined, 8))
// //默认值可以是其他参数的默认表达式
// function f(x, y = 7, z = x + y) {
//     return x + y + z
// }

// function f(x, y = 7, z = 43) {
//     console.log(arguments.length);
//     console.log(Array.from(arguments))
//     return x * 10 + z
// }
// console.log(f(1, undefined, 2))


// function f(x, y = 7, z = x + y) {
//     // 函数体的length属性可以获取到函数没有默认值的参数的个数
//     console.log(f.length)
//     return x * 10 + z
// }
// console.log(f(1, 2, 3, 4))

// 求和函数   es5
// function sum() {
//     let number = 0
//     Array.prototype.forEach.call(arguments, function (item) {
//         number += item * 1
//     })
//     Array.from(arguments).forEach(function (item) {
//         number += item * 1
//     })
//     return number
// }
// console.log(sum(1, 2, 3))

// es6
// Rest parameter  将所有的参数都放在...后面的nums变量中,是一个数组类型
// 把第一个参数*2再加上其他的参数，nums取得是剩余的参数
// function sum(base, ...nums) {
//     let number = 0
//     nums.forEach(function (item) {
//         number += item * 1
//     })
//     return base * 2 + number
// }
// console.log(sum(1, 2, 3, 5))

// function sum(x = 1, y = 2, z = 3) {
//     return x + y + z
// }
// let data = [4, 5, 6]
// console.log(sum.apply(this, data))
// console.log(sum(...data))

//function hello() { }
//let hello = function () { }


// let hello = (name) => {
//     console.log('hello world', name)
// }
// //当有且只有一个参数的时候  箭头函数的小括号可以省略
// let hello1 = name => {
//     console.log('hello world', name)
// }
// hello1('imooc')
// //如果函数的返回值是表达式，花括号可以省略
// let sum = (x, y, z) => x + y + z
// console.log(sum(1, 2, 3))

// //如果返回时一个自变量对象
// let sum = (x, y, z) => ({
//     x: x,
//     y: y,
//     z: z
// })
// let sum1 = (x, y, z) => {
//     return {
//         x: x,
//         y: y,
//         z: z
//     }

// }
// console.log(sum(1, 2, 3))

let test = {
    name: 'test',
    say: () => {
        console.log(this.name)
    }
}
test.say()//es5 谁调用this就指向谁 ，es6 谁定义就指向谁

//输出结果：test

