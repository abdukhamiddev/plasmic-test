
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-audio.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-audio.cjs.development.js')
}
