
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-eventbrite.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-eventbrite.cjs.development.js')
}
