const safeStringify = require('fast-safe-stringify')

try {
  console.log(safeStringify({
    toJSON() {
      throw new Error('blowup')
    },
  }))
} catch (error) {
  console.log('never reached here')
  console.log(error)
}
