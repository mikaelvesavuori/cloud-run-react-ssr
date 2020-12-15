const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const assetsDir = path.resolve(__dirname, 'src/assets/');
const srcDir = path.resolve(__dirname, 'src/');
const distDir = path.resolve(__dirname, 'dist');

module.exports = {
  watch: false,
  context: srcDir,
  mode: 'production',
  entry: {
    app: './client.tsx'
  },
  output: {
    path: distDir,
    filename: 'assets/[name].js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, './')
    ],
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.css',
      '.html',
      '.jpg',
      '.jpeg',
      '.svg',
      '.png',
      '.woff2',
      '.woff'
    ]
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ],
        exclude: [/node_modules/, /src\/node_modules/]
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: [/node_modules/, /src\/node_modules/]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        exclude: [/node_modules/, /src\/node_modules/]
      },
      {
        test: /\.(jpg|jpeg|svg|png|woff2|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              emitFile: false
            }
          }
        ],
        include: assetsDir,
        exclude: [/node_modules/, /src\/node_modules/]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ],
        exclude: [/node_modules/, /src\/node_modules/]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${srcDir}/assets/`,
          to: `${distDir}/assets/`
        }
      ]
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};
