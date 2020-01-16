#!/usr/bin/env node
const {
  getDirectories,
  hasNodeModules,
  removeNodeModules
} = require('../helpers')
const path = require('path')
const inquirer = require('inquirer')
const argv = require('yargs').argv

const [dir] = argv._

const dirNames = getDirectories(dir).filter(dirName =>
  hasNodeModules(path.join(dir, dirName))
)

const question = 'Select folders you want to remove node_modules from'

inquirer
  .prompt([
    {
      type: 'checkbox',
      name: question,
      choices: dirNames
    }
  ])
  .then(answers => {
    for (const dirName of answers[question]) {
      removeNodeModules(path.join(dir, dirName))
      console.log(`🧹 Removed node_modules from ${dirName}`)
    }
  })
