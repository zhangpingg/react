// 启动：node server/server1.js
// 接口地址：http://localhost:9001/getData

//const http = require('http');
import http from 'http';

const server = http.createServer(); // 搭建一个简单的服务器

server.on('request', (req, res) => {
    // 监听接口请求
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/event-stream', // 必须设置为 text/event-stream
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
    });
    // 接口
    if (req.url === '/getData') {
        setInterval(() => {
            const data = { code: 200, data: '后台数据' };
            res.write(`data: ${JSON.stringify(data)}\n\n`); // 注意格式
        }, 2000);
    }
});
server.listen(9001, () => {
    console.log('接口地址为：http://localhost:9001/getData');
});
