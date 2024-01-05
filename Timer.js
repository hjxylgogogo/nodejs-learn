/*
timer模块公开了一个全局的API，所以不需要引入timer模块。

timer模块常有的类有Immediate类和Timeout类

setImmediate()
setInterval()
setTimeout()
无法取消使用setimmediate()、setTimeout()的Promise化的变体创建的定时器

*/

// setTimeout(() => { 
//     console.log("123");
//  },2)
// setInterval(() => { 
//     console.log("123");
//  },2)
setImmediate(() => { 
    console.log("123");
 },2)