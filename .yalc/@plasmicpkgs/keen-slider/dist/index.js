
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keen-slider.cjs.production.min.js')
} else {
  module.exports = require('./keen-slider.cjs.development.js')
}
