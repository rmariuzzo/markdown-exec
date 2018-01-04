'use strict'

const xmlComment = require('xml-comment-api')
const { execSync } = require('child_process')

function markdownExec(data, cwd) {
  return xmlComment(data).replace('markdown-exec', tag => {
    const { cmd, match } = tag.attributes

    // Execute command and capture output.
    if (!cmd) {
      throw new Error('No command defined!')
    }
    const output = execSync(cmd, { cwd }).toString()

    // Execute optional regexp matcher.
    if (match) {
      return new RegExp(match).exec(output)[0]
    }

    return output
  }).contents()
}

module.exports = markdownExec
