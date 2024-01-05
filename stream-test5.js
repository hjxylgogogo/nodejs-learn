const fs = require('fs')
const r = fs.createReadStream('x.txt',{
    highWaterMark:8
})
const w = fs.createWriteStream('x3.txt',{
    highWaterMark:8
})

let n = 0
r.on('data',(chunk) => { 
    const flag = w.write(chunk)
    if(!flag){
        r.pause()
    }
 })

r.on('pause',(chunk) => { 
    console.log('暂停了');
    n++
  })

w.on('drain',() => { 
    r.resume()
 })

r.on('close',() => { 
    console.log(n);
 })