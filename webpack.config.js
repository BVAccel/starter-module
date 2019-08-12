const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'module.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
