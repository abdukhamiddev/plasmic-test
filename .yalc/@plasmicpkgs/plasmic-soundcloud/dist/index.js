
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-soundcloud.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-soundcloud.cjs.development.js')
}
