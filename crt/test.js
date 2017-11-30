var httpsModule = require('https');
var fs = require('fs');

var https = httpsModule.Server({
     key: fs.readFileSync('./server.key'),
     cert: fs.readFileSync('./server.crt')
}, function(req, res){
    res.writeHead(200);
    res.end("hello world\n");
});

//https默认de监听端口时443，启动1000以下的端口时需要sudo权限
https.listen(2017, function(err){
     console.log("https listening on port: 443");
});
