
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-calendly.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-calendly.cjs.development.js')
}
