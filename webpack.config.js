const StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  entry: './index.js',

  output: {
    publicPath: `//localhost:8080/`,
  },

  plugins: [
    new StatsPlugin('manifest.json', {
      chunkModules: false,
      source: false,
      chunks: false,
      modules: false,
      assets: true,
    }),
  ],
};
