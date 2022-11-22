'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var fs = require('fs');

http.createServer(function (req, res) {
    console.log(req.url);
    switch (req.url) {
        case "/main.css":
            fs.readFile(__dirname + '/main.css', function (error, data) {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.write(data);
                res.end();
            });
            break;
        case "/Images/splash-1.jpeg":
            var s = fs.createReadStream(__dirname + '/Images/splash-1.jpeg');
            s.on('open', function () {
                res.setHeader('Content-Type', 'image/jpeg');
                s.pipe(res);
            });
            break;
        case "/app.js":
            fs.readFile(__dirname + '/app.js', function (error, data) {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.write(data);
                res.end();
            });
        default:
            fs.readFile(__dirname + '/index.html', function (error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    res.end();
                }
            });
            break;
    }
}).listen(port);
