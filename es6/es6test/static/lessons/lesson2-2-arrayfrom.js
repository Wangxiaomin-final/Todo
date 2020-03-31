// //es5
// let args=[].slice.call(arguments)//collection
// let imgs=[].slice.call(document.querySelectorAll('img'))//nodelist
// console.log(args)

// //es6
// //Array.prototype.from
// let args=Array.from(arguments)
// let imgs=Array.from(document.querySelectorAll('img'))
// imgs.forEach()
/**
 * Array.from(arrayLike,mapFn,this)
 * arrayLike 伪数组
 */

//定义一个长度为5的数组并将每个元素赋值为1
//let array = Array.from({ length: 5 }, function () { return 1 });
