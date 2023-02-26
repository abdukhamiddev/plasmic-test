
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-wordpress.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-wordpress.cjs.development.js')
}
