#!/usr/bin/env node

'use strict'

const fs = require('fs-extra')
const path = require('path')
const command = require('meow')
const markdownExec = require('.')

const cli = command(`
  Usage
    $ markdown-exec <markdown.md>

  Examples
    $ markdown-exec ./README.md
`)

const [input] = cli.input

Promise.resolve()
  .then(() => input || Promise.reject('An input file must be provided.'))
  .then(() => update(input))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

function update(input) {
  return fs.readFile(input, 'utf-8')
    .then((data) => markdownExec(data, path.dirname(input)))
    .then((updated) => fs.writeFile(input, updated))
    .catch((error) => {
      if (error.code === 'ENOENT') {
        throw new Error(`${source} doesn't exist`)
      }

      throw error;
    })
}
