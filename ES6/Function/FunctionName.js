'use strict'

/*
* 函数的名字
* ES6 为函数添加了一个默认的name属性，这个属性指向的就是函数的名字
* */

// 函数声明的方式
function madman() {
    console.log('我是madman函数')
}

console.log(madman.name)    // madman

// 匿名函数表达式
let copyMadman = function () {
    console.log('我是另一个函数')
}

console.log(copyMadman.name)    //copyMadman

let copySuperMadman = function superMadman() {
    console.log('我是一个超级疯子的函数')
}

console.log(copySuperMadman.name)   //superMadman , 声明式的优先级更高