import { resolve as _resolve } from 'path';

export const entry = './src/index.jsx';
export const mode = 'development';
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/env',
          '@babel/preset-react',
        ],
      },
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      type: 'asset/resource',
    },
  ],
};
export const resolve = { extensions: ['*', '.js', '.jsx'] };
export const output = {
  // eslint-disable-next-line no-undef
  path: _resolve(__dirname, 'dist/'),
  filename: 'bundle.js',
};
export const devServer = {
  static: './dist',
  port: 3000,
  hot: true,
};
