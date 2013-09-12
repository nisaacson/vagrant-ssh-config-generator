var expect = require('chai').expect
var fs = require('fs')
var path = require('path')
var index = require('../index')
var sshKeyPath = require('../lib/ssh-key-path')

describe('Config', function() {

  it('should produce correct config file', function() {
    var config = index()
    expect(config).to.not.be.empty

    var pattern = /SSH_KEY_PATH_HERE/g
    var fixtureConfig = fixture()
    fixtureConfig = fixtureConfig.replace(pattern, sshKeyPath())
    expect(config).to.equal(fixtureConfig)
  })
});

function fixture() {
  var fixturePath = path.join(__dirname, 'fixtures/config.txt')
  var contents = fs.readFileSync(fixturePath, 'utf8')
  return contents
}
