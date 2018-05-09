'use strict'

/*
* 解构数组
* */
function breakArr() {
    return ['🎂', '🍵', '🍎']
}
// 如果想把数组的每一项都赋给一个新的变量，之前的操作是
/*var arr = breakArr(),
    dessert = arr[0], tea = arr[1], fruit = arr[2];*/

// 来看一下es6 的骚操作
let [dessert, tea, fruit] = breakArr()

console.log(dessert, tea, fruit)


