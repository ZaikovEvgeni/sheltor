const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: ['@babel/polyfill', './pages/main/script.js'],
    pets: './pages/pets/script.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash]bundle.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images')
    },
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  devServer: {
    port: 8080,
        historyApiFallback: 
     {
      index: '/pages/main',
      // index: '/pages/pets'
     
    }
   
   
  },


  optimization: {
    splitChunks: {
      cacheGroups: {
        fooStyles: {
          type: "css/mini-extract",
          name: "styles_main",
          chunks: (chunk) => {
            return chunk.name === "main";
          },
          enforce: true,
        },
        barStyles: {
          type: "css/mini-extract",
          name: "styles_pets",
          chunks: (chunk) => {
            return chunk.name === "pets";
          },
          enforce: true,
        },
      },
    },
  },




  plugins: [
    new HtmlWebpackPlugin({
      filename: 'pages/main/index.html',
      template: './pages/main/index.html',
      chunks: ['main'],
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/pets/index.html',
      template: './pages/pets/index.html',
      chunks: ['pets'],
      minify: {
        collapseWhitespace: true
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets/images'), to: path.resolve(__dirname, 'dist/assets/images') },
        // { from: path.resolve(__dirname, 'src/pages/pets/style.sass'), to: path.resolve(__dirname, 'dist/pets') },
      ]
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      // chunkFilename: '[id].css',
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      // chunkFilename: 'pets',
    }),


  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader']

      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        // use: ['file-loader']
        type: 'asset/resource'
      },
      {
        test: /\.(ttf|woff|woff2|eot)/,
        // use: ['file-loader']
        type: 'asset/resource'

      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              "@babel/preset-typescript"
            ]
          }
        }
      }
    ]
  }
};