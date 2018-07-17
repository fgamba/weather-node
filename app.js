const http = require('http');
http.createServer((req ,resp) => {
    resp.writeHead(200, {'content-type': 'application/json'});
    let response = {
        name: 'fernando',
        age: '44',
        url: req.url
    }
    resp.write(JSON.stringify(response));
    resp.end();
})
.listen(8080);