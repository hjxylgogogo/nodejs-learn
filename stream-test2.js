const {Transform,pipeline} = require("stream")
const fs = require('fs')

class myStream extends Transform{
    constructor(options){
        super(options)
    }
    _transform(chunk,encoding,cb){
        this.push(chunk.toString().toUpperCase())
        cb()
    }
}

const a = fs.createReadStream('./a.txt')
const b = fs.createWriteStream('./b.txt')
const t = new myStream()
pipeline(a,t,b,(err) => { 
    console.log(err);
 })

