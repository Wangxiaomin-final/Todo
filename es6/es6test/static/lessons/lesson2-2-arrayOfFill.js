//生成新数组
//es5  
// let array=Array(5)
// let array=[]

//es6 
//Array.prototype.of
// let array = Array.of(1, 2, 3, 4, 5) 
// console.log(array);

//array.prototype.fill
// let array = Array(5).fill(4)
// console.log(array);
// Array.fill(value,start,end) [a,b)半闭半开区间

let array = [1, 2, 3, 4, 5, 6];
console.log(array.fill(8, 2, 4))