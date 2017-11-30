/**
 * Created by lenovo on 2017/11/30.
 */
var http = require('http');
var options = {
  hostname: 'localhost',
  port: 8888,
  path: '/',
  method: 'get'
}

var req = http.request(options, function(res) {
  res.on('data', (chunk) => {
    console.log(`响应主体: ${chunk}`);
  });
  res.on('end', () => {
    console.log('响应中已无数据。');
  });
});
req.write('发给你了！');
console.log('发给你了！');
req.end();
// console.log('gg');