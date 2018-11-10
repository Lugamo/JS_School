const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.otf$/,
        use: [{
          loader: 'file-loader',
        }],
      },
      {
        test: /\.(jpg|png)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 5000,
          },
        }],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        enforce: 'pre',
        test: /\.handlebars$/,
        loader: 'handlebars-loader',
        options: {
          helperDirs: path.resolve(__dirname, './src/helpers'),
          precompileOptions: {
            knownHelpersOnly: false,
          },
          inlineRequires: /\/assets\/(:?images|audio|video)\//ig,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html',
    }),
  ],
};
