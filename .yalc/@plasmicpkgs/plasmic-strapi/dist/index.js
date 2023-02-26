
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-strapi.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-strapi.cjs.development.js')
}
