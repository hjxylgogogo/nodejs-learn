
const dgram = require('dgram')
const server = dgram.createSocket('udp4')

server.on('message',(msg,rinfo) => { 
    console.log(`服务器端从${rinfo.address}:${rinfo.port}收到${msg}`);
    console.log(`地址类型是${rinfo.family}:msg大小是${rinfo.size}`);

    server.send(msg+'too',rinfo.port,rinfo.address)
 })

server.on('listening',() => { 
    const address = server.address()
    console.log(`服务器监听${address.address}:${address.port}`);
 })

 server.bind(41234)