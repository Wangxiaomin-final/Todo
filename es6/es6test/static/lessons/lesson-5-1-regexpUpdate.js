// const s = 'aaa_aa_a'
// const r1 = /a+/g // g修饰符 从剩余的字符中进行匹配
// const r2 = /a+/y 
// // sticky 粘连 第一次匹配之后，从剩余的字符中的第一个开始进行严格匹配
// //^ $
// r1.exec(s)
// console.log(r1.exec(s)) // aaa
// console.log(r2.exec(s)) // aaa

// console.log(r1.exec(s)) // aa
// console.log(r2.exec(s)) // null


// // es6 对多字节字符的识别 u修饰符 \ufff
// let s = '𠮷' // UTF-16 :0xD842 0xDFB7 (d842dfb7)
// let s2 = '\uD842\uDFB7'

// console.log(/^\uD842/.test(s2)) // 输出 true 's2'被解析成字符串,正则匹配
// console.log(/^\uD842/u.test(s2)) // 输出 false 加了u修饰符，s2被解析成一个字符 正则不匹配

// let s = '𠮷'
// console.log(/^.$/.test(s)) //输出 false 
// console.log(/^.$/u.test(s)) //输出 true

// let s = '𠮷' //U+20BB7
// console.log(/\u{20BB7}/u.test(s)) // 输出 true
// console.log(/\u{61}/u.test('a'))  // true
// console.log(/\u{61}/.test('a'))   // false 

// 如果想在正则表达式中使用Unicode码点来识别字符 \u{unicode码点值}
// 需要在正则表达式的结尾加上/u

// console.log(/𠮷{2}/u.test('𠮷𠮷')) // true
// console.log(/𠮷{2}/.test('𠮷𠮷')) // false

// console.log(/[a-z]/i.test('\u212A')) // false  不识别大小写
// console.log(/[a-z]/iu.test('\u212A')) // true  忽略大小写

