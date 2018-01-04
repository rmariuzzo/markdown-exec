const fs = require('fs')
const tmp = require('tmp')
const path = require('path')
const { exec } = require('child_process')
const xmlComment = require('xml-comment-api')

const source = path.join(__dirname, './fixtures/test.md')

describe('markdown-exec', () => {

  let input

  beforeAll(() => {
    const file = tmp.fileSync()
    fs.createReadStream(source).pipe(fs.createWriteStream(file.name))
    input = file.name
  })

  it('should execute code in string', (done) => {
    exec(`./cli.js ${input}`, (error, stdout) => {
      if (error) fail(error)
      const data = fs.readFileSync(input, { encoding: 'utf-8' })
      const tags = xmlComment(data).find('markdown-exec')
      expect(tags[0].contents).toEqual(expect.stringContaining('test'))
      expect(tags[1].contents).toEqual(expect.stringContaining('123'))
      done()
    })
  })
})
