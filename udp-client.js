
const dgram = require('dgram')
const message = Buffer.from('asdf')
const client = dgram.createSocket('udp4')

client.on('message',(msg, rinfo) => { 
    console.log(`客户端从${rinfo.address}:${rinfo.port}收到${msg}`);
    console.log(`地址类型是${rinfo.family}:msg大小是${rinfo.size}`);
 })

 setInterval(() => { 
    client.send(message,41234,'localhost')
  },5)