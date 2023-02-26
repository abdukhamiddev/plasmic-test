
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-contentstack.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-contentstack.cjs.development.js')
}
