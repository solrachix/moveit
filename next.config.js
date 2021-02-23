const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')

module.exports = withPlugins([
  withSvgr,
  { distDir: 'build' }
  // your other plugins here
])
