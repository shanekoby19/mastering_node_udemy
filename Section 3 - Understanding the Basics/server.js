const http = require('http');
const router = require('./router');

const server = http.createServer(router);
http.createServer()


process.on('SIGINT', () => {
    console.log('Closing the server gracefully after SIGINT (Ctrl + C)')
    server.close();
});

server.listen(3000);