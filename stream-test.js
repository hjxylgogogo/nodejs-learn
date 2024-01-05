const http = require('http')
const fs = require('fs')
const {pipeline} = require("stream")
const server = http.createServer((req,res) => { 
    const w = fs.createWriteStream("./x.jpeg")
    // req.on("data",(chunk) => { 
    //     w.write(chunk)
    //  })

    //  req.on("end",() => { 
    //     w.end()
    //     res.end("图片保存成功")
    //   })

    // w.on('error',(err) => {
    //     console.log(err);
    //     res.end('图片保存失败')
    //   })
    pipeline(req,w,(err) => { 
        console.log(err);
        res.end('图片保存失败')
     })
    res.end('保存成功')
 })

 server.listen(3000)