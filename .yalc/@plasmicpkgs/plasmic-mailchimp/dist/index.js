
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-mailchimp.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-mailchimp.cjs.development.js')
}
