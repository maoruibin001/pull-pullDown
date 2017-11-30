/**
 * Created by lenovo on 2017/11/30.
 */
var http = require('http');
const fs = require('fs');

var server = http.createServer(function (req, res) {
  if (req.url !== 'favicon.ico') {
    console.log('客户端url:' + req.url)
    req.on('data', function (data) {
      console.log('服务器接收到数据：' + data);
      res.end();
    });
    let html = fs.readFileSync('./view.html');
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(html);
    res.end();
  }
}).listen(8888);
console.log('程序gg');