
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./humaaans.cjs.production.min.js')
} else {
  module.exports = require('./humaaans.cjs.development.js')
}
