/*
http协议用于将服务器超文本传输到本地浏览器
目前主流采用http协议来发布rest api

http.Server类创建服务器 继承net.Server类

const server = http.createServer()创建http服务器
server.listen()用于*指定*服务器启动时绑定的端口

http.Server事件如下：
checkContinue事件
checkExpectation事件
clientError事件
close事件
connect事件
connection事件
request事件
upgrade事件
*/

/*
http.request()用于发送http请求，并且创建http.ClientRequest对象
*/