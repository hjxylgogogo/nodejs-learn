/*
nodejs被设计用来高效处理I/O操作，不擅长处理cpu密集型的任务。node提供了child_process模块，将cpu密集型的任务分配给多线程进行处理，这样不但能够释放事件循环，同时也能够利用多核的计算优势
*/

/*
执行外部命令：当需要执行一个外部shell命令或者可执行文件时，可以使用child_process模块的spawn()、exec()或execFile()方法来实现
*/

import {spawn} from 'child_process'
import { log } from 'console'
const childProcess = spawn('node',['-v'])

childProcess.stdout.on('data',(data) => { 
    console.log(`stdout: ${data}`);
 })

 /*
 spawn()、exec()或execFile()方法返回一个ChildProcess对象，ChildProcess类继承EventEmitter类

 child_process模块允许对子进程的启动、终止及与其交互进行更加精细的控制。
 例如：父进程新建了一个子进程，一旦启动了一个新的子进程，nodejs就创建了一个双向通信的通信，父进程还可以对子进程施加一些控制
 */