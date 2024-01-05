const fs = require('fs')
const w = fs.createWriteStream('x.txt',{
    highWaterMark:3
})


let i=0
function write(){
    let flag = true
    while(i<1024&&flag){
        flag=w.write('b')
        i++
    }
    
}
write()
w.on('drain',() => { 
    write()
 })