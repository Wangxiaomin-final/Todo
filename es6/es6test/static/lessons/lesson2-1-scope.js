/*
全局作用域
{//全局变量  不能被删除
    var abc = 1234;
    //作为全局对局对象Window属性  对象的属性可删除
    abcd = 2345;

    //ab也是window对象的属性
    function test() {
        ab = 45;
    }
    test();
}

function test() {
    var a = 3
    function test2() {
        var b = 4
        return a + b;
    }
    return test2()
}
*/

/*
// 函数作用域  块状作用域
function test() {
    var a = 3
    if (a === 3) {
        console.log('abc')
    } else {
        console.log('abcd')
    }
    return a + 4
}
console.log(test())
console.log(a)
*/
/**
 * 动态作用域

a = 3
function test() {
    console.log(this.a)
}
test();
test.bind({ a: 100 })()//bind 动态绑定
*/
