import { resolve } from 'path';

module.exports = {
  entry: './src/app.ts',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'app.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  externals: ['aws-sdk'],
  target: 'node',
};
