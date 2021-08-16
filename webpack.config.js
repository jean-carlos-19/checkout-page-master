const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/App.js',
  output: {
    path: path.resolve(__dirname, 'src/js'),
    filename: 'App.js',
  },
};
