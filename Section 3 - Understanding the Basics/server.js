const http = require('http');
const router = require('./router');

const server = http.createServer(router);
http.createServer()

server.listen(3000);