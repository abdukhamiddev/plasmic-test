
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-lite-embed.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-lite-embed.cjs.development.js')
}
