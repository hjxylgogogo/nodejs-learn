const { Readable } = require('node:stream');

class MyReadable extends Readable{
    constructor(option){
        super(option)
    }
 _read(size){
    }
}

const myr = new MyReadable({
    // highWaterMark:1
    // objectMode:true
})
// myr.on('readable',() => { 
//     let chunk
//     while (chunk=myr.read(2)) {
//         console.log(chunk);
//     }
//     // console.log(chunk)
//     console.log(myr);
//  })

// myr.on('data',(data) => { 
//     console.log("1"+data);
//  })
// myr.push("123")
// myr.push("123")
// myr.push("123")
// console.log(myr);

const fs = require('fs')
const rf = fs.createReadStream('./abc.txt',{
    highWaterMark:1
})
rf.on('data',(data) => { 
    console.log(data);  
    rf.pause()
    rf.resume()
 })

