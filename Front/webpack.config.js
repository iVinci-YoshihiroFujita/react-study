const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/env',
            '@babel/preset-react',
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  plugins: [
    new webpack.EnvironmentPlugin(['API_HOST']),
  ],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js'
  },
  devServer: {
    static: './dist',
    port: 3000,
    hot: true
  },
};
