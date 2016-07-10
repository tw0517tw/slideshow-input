const autoprefixer = require('autoprefixer');
const simpleVars = require('postcss-simple-vars');
const nested = require('postcss-nested');


module.exports = {
  output: {
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [{
      test: /\.json$/,
      loaders: ['json'],
      exclude: /node_modules/,
    },
    {
      test: /\.global\.css$/,
      loaders: [
        'style-loader',
        'css-loader?sourceMap',
      ],
    },
    {
      test: /^((?!\.global).)*\.css$/,
      loaders: [
        'style-loader',
        'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', // eslint-disable-line max-len
        'postcss-loader',
      ],
    }],
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 version', 'IE 10'],
    }),
    simpleVars,
    nested,
  ],
};
