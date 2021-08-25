const path = require('path');
const webpack = require('webpack')


module.exports = {
  entry: path.join(__dirname, './client/src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, "./client/dist")
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test:/\.(js$|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ]
  }
}