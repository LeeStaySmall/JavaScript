'use strict'

/*
*  函数参数的默认值
* */

function A(name, age) {
    var name = name || 'Madman'
    var age = age || '24'
    var str = '我叫' + name + '，今年' + age + '岁。'
    return str
}
console.log(A()) // 我叫Madman，今年24岁。
console.log(A('疯子', 22))  // 我叫疯子，今年22岁。

function B(name = 'Madman', age = 24) {
    let str = `我叫${name}，今年${age}岁。`
    return str
}

console.log(B()) // 我叫Madman，今年24岁。
console.log(B('疯子', '20')) // 我叫疯子，今年20岁。