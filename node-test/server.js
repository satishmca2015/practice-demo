const app = require('./app');

const httpserver = http.createServer(app);


const server = httpserver.listen(5000, () => {
    console.log('server is rining on 500');

});