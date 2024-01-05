
/*
Socket(套接字)是tcp套接字或流式ipc端点的抽象。
Socket是双工流,因此它可读可写

net.Server类创建TCP服务器或IPC服务器，支持如下事件：
connection事件
error事件
listening事件

*/

const net = require('net')
const server = net.createServer((socket) => {
    socket.end('goodbye\n');
  }).on('error', (err) => {
    // Handle errors here.
    throw err;
  });
  
  // Grab an arbitrary unused port.
  server.listen(() => {
    console.log('opened server on', server.address());
  });