let merge = require('webpack-merge')
let prodEnv = require('./prod.env')
let commonConf = require('./common.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
