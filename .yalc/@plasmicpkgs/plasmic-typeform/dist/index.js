
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-typeform.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-typeform.cjs.development.js')
}
