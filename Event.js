/*
node的核心优势是 nodejs是异步事件驱动的，这样拥有了高并发处理能力。
nodejs应用中事件无处不在，
主要有三类角色：
1.Event
2.Event Emitter
3.Event Listener

能触发事件的对象 都是 EventEmitter类的实例，这些对象都有一个eventEmitter.on()函数用于绑定命名事件
*/
import EventEmitter from 'events'
class MyEmitter extends EventEmitter{}
const m = new MyEmitter()
m.on('event1',(err) => { 
    console.log('触发事件1');
    console.log(err);
 })
m.on('event2',() => { 
    console.log('触发事件2');
 })

m.emit('event2')
m.emit('event1',new Error('error'))


/*
 nodejs中几乎每一个api都是支持回调函数的
 nodejs中的事件机制都是用设计模式中的观察者模式实现，nodejs单线程进入了一个事件循环，直到没有事件观察者便退出。每个异步事件都会生成一个事件观察者，如果事件发生就调用回调函数。
*/


/*
 事件发射器(Event Emitter) 定义在events模块的EventEmitter类（事件发射器的作用是注册事件、触发事件）
 
 当EventEmitter类实例新增监听器时，会触发newListener事件；移除事件时则触发removeListener事件

 注意回调函数this值，如果用箭头函数回调函数this的值不会指向EventEmitter实例，

 EventEmitter会按照监听器注册的顺序同步地调用监听器。 可以使用setImmediate()或process.nextTick()切换到异步模式！！此处理解有点模糊--解释：同一个事件可以注册多个监听器，也就是可以注册多个回调函数
 
*/




/*
默认情况下，每个事件可以注册最多10个监听器，这个数量可以通过具体方法改变的
*/



/*
1.理解事件和回调
2.事件发射器
3.事件类型
4.事件的操作
*/