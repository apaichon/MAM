const fs = require('fs');
const path = require('path');

const Secure = {
  key: fs.readFileSync(path.resolve('cert', 'localhost-privkey.pem')),
  cert: fs.readFileSync(path.resolve('cert', 'localhost-cert.pem'))
}

module.exports = {
  Secure
}
