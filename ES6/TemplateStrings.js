'use strict'

/*
* 模板字符串
* */
let tea = '🍵', dessert = '🎂'

//old
var oldString = '我今天的早餐是' + tea + '和' + dessert

//new
let newString = `我今天的早餐是${tea}和${dessert}`


console.log('oldString:' +  oldString)
console.log(`newString:${newString}`)