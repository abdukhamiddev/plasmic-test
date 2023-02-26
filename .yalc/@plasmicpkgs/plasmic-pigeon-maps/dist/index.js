
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-pigeon-maps.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-pigeon-maps.cjs.development.js')
}
