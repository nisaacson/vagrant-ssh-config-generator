var ejs = require('ejs')
var fs = require('fs')
var path = require('path')

function templatePath() {
  return path.join(__dirname, 'templates/config.ejs')
}
function homeDir() {
  return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE
}
var str = fs.readFileSync(templatePath(), 'utf8')

var ret = ejs.render(str, {
  home: homeDir()
});

console.log(ret);
