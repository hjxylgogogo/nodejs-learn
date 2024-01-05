/*
    早期的js没有用于读取、操作二进制数据流的机制，nodejs引入Buffer类用于再TCP流、文件操作系统等等与字节流进行交互。
    
    TypedArray对象可以自定义数组类型

*/

const t = new Int8Array(8)
t[0] = 128 //-128
t[1] = 127 //127
// console.log(t);

/*
  Buffer类是基于Unit8Array的，因此值为0-255之间的整数数组。可以理解为简单的数组结构
  Buffer类的方法使用这不介绍
*/
const b = Buffer.alloc(8)
b[0] = 257 //1
// console.log(b);

/*
    Buffer的alloc方法与allocUnsafe方法的区别，可以node启动项启用零填充保证安全，但会对性能产生影响

*/
const safeBuf = Buffer.alloc(10)
const unsafeBuf = Buffer.allocUnsafe(10)
// console.log(safeBuf.toString());
// console.log(unsafeBuf.toString());//可能有旧数据

const a = [1,2,3]
console.log(a.slice(0,-2));

/*
    连接buffer时最好指定长度，提前预知长度可以提高性能
*/

/*
1.了解buffer
2.创建buffer
3.切分buffer
4.连接buffer
5.比较buffer
6.buffer编码和解码
*/

