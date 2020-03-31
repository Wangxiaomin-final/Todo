/**
 *

{
    let a = 1
    console.log(a)
}
console.log(a)
var b = 3
let c = 4
console.log(b, c)
console.log(window.b, window.c);
 */
/**
 * 下面代码输出是什么，如果根据i的顺序输出
 for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
 *输出3 ， 将var 改成let 会根据i的顺序输出
 都是3是异步 + 全局作用域两者一起造成的，setTimeout是异步代码，js会先执行同步代码，也就是for循环，setTimeout放在异步队列中，三次for循环执行完毕之后，异步队列中三个setTimeout就开始执行，开始打印i，此时i已经是3，所以会打印3次3。 就算你将setTimeout的1000改为0，还是执行三次3。

如果是let定义i，那么每次执行大括号时候，作用域是固定的，setTimeout被放入异步队列中的时候传递进去的i是这个块级作用域的i,所以值会被保护起来，三次for执行之后，开始执行异步队列的三个setTimeout, 每个setTimeout里面保存的i都是对应作用域里的i，所以会打印0, 1, 2
 */

