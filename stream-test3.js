const {Transform,pipeline,Readable} = require("stream")
const fs = require('fs')

const obj = [
    {name:"asd1",age:40},
    {name:"asd2",age:10},
    {name:"asd3",age:20},
    {name:"asd4",age:30},
    {name:"asd5",age:40},
    {name:"asd6",age:30},
    {name:"asd7",age:50},
    {name:"asd8",age:90},
]

class myStream extends Transform{
    constructor(options){
        super({...options,objectMode:true})
        this.total = 0
        this.counter = 0
    }
    _transform(chunk,encoding,cb){
        this.total += chunk.length 
        for(let item of chunk){
            if(item.age>40){
                this.push(JSON.stringify(item))
                this.push('\n')
                this.counter++
            }
        }
        cb()
    }

    _flush(cb){
        this.push('----------------------')
        this.push('\n')
        this.push(`通过率：${this.counter}/${this.total}`)
    }
}

const r = new Readable({
    objectMode:true,
    read(){
        this.push(obj)
        this.push(null)
    }
})

const t = new myStream()

const w = fs.createWriteStream('./x.txt')

pipeline(r,t,w,(err) => { 
    console.log(err);
 })