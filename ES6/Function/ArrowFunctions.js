'use strict'

/*
* 箭头函数
* */

let madman = argument => argument

console.log(madman('哈哈哈')) // 哈哈哈

// 上面的写法等价于
// var madman = function madman(argument) {
//     return argument
// }

//如果函数有多个参数
let lMadman = (argument1 = '哈哈哈', argument2 = '呵呵呵') => argument1 + argument2
console.log(lMadman()) // 哈哈哈呵呵呵
console.log(lMadman('啧啧啧','嘿嘿嘿'))   //啧啧啧嘿嘿嘿

// 如果函数不是简单的返回值
let copyMadman = (num1, num2) => {
    return num1 + num2
}
console.log(copyMadman(1,2))    // 3

// 如何函数里面没有参数，需要用一个空白的括号
let testNoArgument = () => {
    console.log('没有参数的箭头函数')
}
testNoArgument()
