require('app-module-path').addPath(__dirname + "/..");
require('marko/node-require').install();
require('lasso/node-require-no-op').enable('.less', '.css');

var production = (process.env.NODE_ENV === 'production');

// Configure the Lasso.js
require('lasso').configure({
  plugins: [
    'lasso-marko',  // Auto compile Marko template files
    'lasso-less'    // Add support for Less files
  ],

  // Directory where generated JS and CSS bundles are written
  outputDir: require('path').join(__dirname, '../build/static'),

  // URL prefix for static assets
  urlPrefix: '/static',

  // Only bundle up JS and CSS files in production builds
  bundlingEnabled: production,

  // Only minify JS and CSS files in production builds
  minify: production,

  // Only fingerprint JS and CSS files in production builds
  fingerprintsEnabled: production
});