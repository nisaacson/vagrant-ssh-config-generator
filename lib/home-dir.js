module.exports = function homeDir() {
  return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE
}
