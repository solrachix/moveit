const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')
const withPWA = require('next-pwa')

module.exports = withPlugins([
  {future: { webpack5: true }},
  [withPWA, { 
    pwa: {
      dest: 'public'
    }
  }],
  withSvgr,
  { distDir: 'build' }
  // your other plugins here
])
