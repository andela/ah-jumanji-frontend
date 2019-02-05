/*eslint-disable no-console */
import webpackConfig from '../webpack.config.prod';

const webpack = require('webpack');
const colors = require('colors');


process.env.NODE_ENV = 'production'; // this assures the Babel dev config (for hot reloading) doesn't apply.
console.log(colors.blue('Generating minified bundle for production via Webpack. This will take a moment...'));
webpack(webpackConfig).run((err, stats) => {
  if (err) { // so a fatal error occurred. Stop here.
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  console.log('Your app has been compiled in production mode and written to /public. It\'s ready to roll!'.green);
  return 0;
});
