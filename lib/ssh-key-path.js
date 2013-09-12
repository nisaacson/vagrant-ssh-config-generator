var path = require('path')
var homeDir = require('./home-dir')

module.exports = function() {
  var keyPath = path.join(homeDir(), '.vagrant.d/insecure_private_key')
  return keyPath
}
