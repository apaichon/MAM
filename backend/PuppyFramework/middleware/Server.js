const cors = require('cors');
const customCors = require('./Cors');
const { Session } = require('./Session');
const { Secure } = require('./Secure');
const spdy = require('spdy');

class Server {

    constructor (port = 3000) {
        this.PORT = port;
        const express = require('express');
        this.bodyParser = require('body-parser');

        this.app = new express();
        this.app.use(this.bodyParser.json());
        this.app.use(this.bodyParser.urlencoded({ extended: false }));
        this.app.use(cors(customCors));
        this.app.use(Session);
        spdy
            .createServer(Secure, this.app)
            .listen(port, (error) => {
                if (error) {
                console.error(error)
                return process.exit(1)
                } else {
                console.log('Listening on port: ' + port + '.')
                }
            })
    }

    Use (object) {
        this.app.use(object);
    }

    All (url, method) {
        this.app.all(url, method);
    }
}

module.exports = Server;