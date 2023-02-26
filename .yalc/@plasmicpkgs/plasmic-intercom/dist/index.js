
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-intercom.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-intercom.cjs.development.js')
}
