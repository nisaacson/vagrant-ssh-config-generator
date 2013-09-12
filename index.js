var ejs = require('ejs')
var fs = require('fs')
var path = require('path')
var sshKeyPath = require('./lib/ssh-key-path')

module.exports = function() {
  var template = loadTemplate()
  var output = ejs.render(template, {
    ssh_key_path: sshKeyPath()
  });

  return output
};

function loadTemplate() {
  return fs.readFileSync(templatePath(), 'utf8')
}

function templatePath() {
  return path.join(__dirname, 'templates/config.ejs')
}
