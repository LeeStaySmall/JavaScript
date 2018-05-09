'use strict'

/*
* 4、带标签的模板字符串
* 标签其实就是个方法，这个方法接收的是每一部分的字符串和变量值，可以对字符串做一些想要的处理
* */

let tea = '🍵', dessert = '🎂'

let string = changeString`我今天早餐是${dessert}和${tea}!`

function changeString(string, ...values) {
    // console.log(string)
    // [ '我今天早餐是', '和', '!' ]

    // console.log(values)
    // [ '🎂', '🍵' ]

    //如果想要在每一个食物后加一朵小花
    let newString = '';
    for (let i = 0; i < values.length; i++) {
        newString += `${string[i]}${values[i]}🌺`
    }
    newString += string[string.length-1]
    // newString: 我今天早餐是🎂🌺和🍵🌺!

    return newString
}

console.log(string)