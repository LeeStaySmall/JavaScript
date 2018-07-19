'use strict'

/*
* 剩余操作符 ...
* */

function breakfast(drink, eat, ...foods ) {
    console.log(drink, eat, foods)
}
breakfast('🍵', '🎂', '🍎', '🍌')  //🍵 🎂 [ '🍎', '🍌' ]

// 剩余的参数都会放在foods这个数组里
