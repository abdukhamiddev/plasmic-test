
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-giphy.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-giphy.cjs.development.js')
}
