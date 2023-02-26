
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-sanity-io.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-sanity-io.cjs.development.js')
}
