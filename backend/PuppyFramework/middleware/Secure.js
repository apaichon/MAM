const fs = require('fs');
const Secure = {
  key: fs.readFileSync( '../../cert/localhost-privkey.pem'),
  cert:  fs.readFileSync('../../cert/localhost-cert.pem')
}

module.exports = {
  Secure
}