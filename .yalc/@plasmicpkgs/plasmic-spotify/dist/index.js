
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-spotify.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-spotify.cjs.development.js')
}
