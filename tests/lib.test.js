const mardownExec = require('..')

describe('markdown-exec', () => {
  it('should execute code in string', () => {
    const xml = mardownExec('<!-- markdown-exec(cmd:echo "test") -->1<!-- /markdown-exec -->', __dirname)
    expect(xml).toEqual(expect.stringContaining('-->test'))
  })
})
