'use strict'

/*
* 新增的字符串的方法
* String.startsWith(str) 判断字符串是否以str开头
* String.endsWith(str) 判断字符串是否以str结尾
* String.includes(str) 判断字符串中是否包含str
* */

let tea = '🍵', dessert = '🎂'

let string = `我今天早餐是${dessert}和${tea}!`

console.log(string.startsWith('我今天')) // true
console.log(string.startsWith('🍵')) // false
console.log(string.endsWith('🍵!')) // true
console.log(string.endsWith('🍵')) // false
console.log(string.includes('🎂')) // true