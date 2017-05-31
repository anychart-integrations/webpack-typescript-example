var path = require('path');
module.exports = {
  entry: "./index.ts",

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [ 'babel-loader', 'ts-loader' ]
      }
    ]
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }
}
