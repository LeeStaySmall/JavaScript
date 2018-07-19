'use strict'

/**
 * 解构参数
 * 使用解构对象的方法，我们可以很容易的为方法传递一个对象的参数
 */

 function eat(time, site, {eat, drink} = {}) {  //{eat, drink} = {}  给对象一个默认值，防止报错
    console.log(time, site, eat, drink)
 }

eat('下午','北京', {eat:'米饭',drink:'小米粥'})  // 下午 北京 米饭  小米粥

eat('上午','北京')  //  上午  北京  undefined undefined