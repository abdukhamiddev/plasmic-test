
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-yotpo.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-yotpo.cjs.development.js')
}
