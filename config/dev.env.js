'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
var argv = require('yargs').argv

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_BASE_URL: argv.api_base_url,
})


