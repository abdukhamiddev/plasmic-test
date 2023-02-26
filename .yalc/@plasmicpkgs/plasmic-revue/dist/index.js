
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-revue.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-revue.cjs.development.js')
}
