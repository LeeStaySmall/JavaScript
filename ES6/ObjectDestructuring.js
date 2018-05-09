'use strict'

/*
* 2、对象解构
* */

function breakObj() {
    return {dessert: '🎂', tea: '🍵', fruit: '🍎'}
}

// 这里为了便于理解，变量定义为var1, var2, var3,  key 是对象的属性， value是要赋值的变量
let {dessert: var1, tea: var2, fruit: var3} = breakObj()

console.log(var1, var2, var3);