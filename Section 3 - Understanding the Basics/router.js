const router = (req, res) => {
    const { url } = req;

    console.log(`URL is ${url}`);

    res.setHeader('Content-Type', 'text/html');

    if(url === '/users') {
        res.write('<html>')
        res.write('<body><h1>Users</h1><ul><li>Shane</li><li>Scott</li><li>Shelby</li></ul><form action="/create-user" method="POST"><input name="fName" type="text"></input><button>CREATE USER</button></form></body>');
        res.write('</html>');
    } else if(url === '/create-user') {
        let requestData = [];
        req.on('data', chunk => {
            requestData.push(chunk);
        })

        return req.on('end', () => {
            const message = Buffer.concat(requestData).toString();
            const name = message.split('=')[1];
            console.log(`The name you entered was ${name}!`);
            res.writeHead(302, { 'Location': '/' });
        })
    } else {
        res.write('<html>')
        res.write('<body><h1>Welcome back!</h1></body>');
        res.write('</html>');
    }

    res.end();
}

module.exports = router;