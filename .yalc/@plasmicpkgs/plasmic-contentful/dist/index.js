
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-contentful.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-contentful.cjs.development.js')
}
