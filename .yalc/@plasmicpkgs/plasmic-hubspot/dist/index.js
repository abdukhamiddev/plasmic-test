
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-hubspot.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-hubspot.cjs.development.js')
}
