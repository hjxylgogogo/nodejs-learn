/*
所有流都继承了EventEmitter类
nodejs有4种基本流类型
1、writable：fs.createWriteStream()
2、Readable: fs.createReadstream()
3、Doplex:net.Socket
4、Transform:zlib.createDeflate()
*/

/*
nodejs创建的流都是运作在字符串和Buffer上的，当然也可以使用其他类型值，这些流会以“对象模式”进行操作

创建流时使用objectMode选项把流实例切换到对象模式。注意将已存在的流切换到对象模式是不安全的
*/

/*
流中的缓冲区！！！
缓冲区的大小取决于流构造函数的highWaterMark选项。对于普通的流highWaterMark指定了字节的总数。对于对象模式的流highWaterMark指定了对象的总数

当调用stream.push(chunk)时，数据会被缓冲在可读流中。如果流的“消费者”没有调用stream.read()。则数据会被保留在缓冲区中直到被消费

由于双工流和转换流都是可读又可写的，所以它们各自维护着两个相互独立的内部缓冲区用于读取和写入
*/


const fs = require('fs')
const path = require('path')
const rr = fs.createReadStream(path.join(__dirname,'data.txt'))

rr.on('readable',() => { 
    let chunk 
    while (chunk=rr.read(1)) {
        console.log(chunk);
    }
 })

// const {Readable} = require('stream')

// class myStream1 extends Readable{
//     constructor(options,data){
//         super(options)
//         this.data = data
//     }
//     _read(){
//         this.push(this.data)
//         this.push(null)
//     }
// }

// const r = new myStream1({
//     encoding:'utf-8',
// },"hjxasd")

// r.on('readable',() => { 
//     let chunk 
//     while (chunk=r.read(1)) {
//         console.log(chunk);
//     }
//  })

// r.on('data',(chunk) => { 
//     console.log(chunk);
//  }) 


//  //可写流
// const {Writable} = require('stream')

// process.chdir(__dirname)
// const obj = {
//     path:'./x.txt',
//     content:'wsihjx'
// }

// class myStream2 extends Writable{
//     constructor(options){
//         super({...options,objectMode:true})
//     }
//     _write(chunk,encoding,cb){
//         fs.writeFile(chunk.path,chunk.content,{encoding},(err) => { 
//             cb()
//          })
//     }
// }
// const m = new myStream2
// m.write(obj)
// m.end


