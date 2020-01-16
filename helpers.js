const { readdirSync, existsSync, rmdirSync } = require('fs')
const trash = require('trash')
const path = require('path')

module.exports.getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

module.exports.hasNodeModules = dir =>
  existsSync(path.join(dir, 'node_modules'))

module.exports.trashNodeModules = dir => trash(path.join(dir, 'node_modules'))
