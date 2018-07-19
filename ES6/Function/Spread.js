'use strict'

/*
* 展开操作符 ...
* */

let fruits = ['🍌', '🍎']

console.log(fruits)  // ['🍌', '🍎']
console.log(...fruits)  // 🍌 🍎

let foods = ['🍚', ...fruits]

console.log(foods)  //[ '🍚', '🍌', '🍎' ]
console.log(...foods)   //🍚 🍌 🍎