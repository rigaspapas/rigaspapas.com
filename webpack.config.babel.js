import webpack from 'webpack'
import path from 'path'
import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import ExtraneousFileCleanupPlugin from 'webpack-extraneous-file-cleanup-plugin'


let DEBUG = process.env.NODE_ENV === 'development'

let extractHtml = new ExtractTextPlugin('[name].html')
let extractLess = new ExtractTextPlugin({
  filename: '[name].css',
});

let config = {
  entry: {
    index: [
      path.resolve(__dirname, 'src/pug/index.pug')
    ],
    'style': [
      path.resolve(__dirname, 'src/less/style.less')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: extractHtml.extract({
          use: [{
            loader: 'html-loader',
          }, {
            loader: 'pug-html-loader',
            options: {
              pretty: false,
            }
          }]
        })
      },
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: !DEBUG,
              sourceMap: DEBUG
            }
          }, {
            loader: 'less-loader'
          }]
        })
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: true,
                optimizationLevel: 4,
              },
              pngquant: {
                enabled: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|eot|ttf|svg)$/i,
        use: 'file-loader'
      },
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: !DEBUG,
      debug: DEBUG,
      options: {
        postcss: [
          autoprefixer({
            browsers: ['last 2 version', 'Explorer >= 8']
          })
        ],
      }
    }),
    extractLess,
    extractHtml,
    new ExtraneousFileCleanupPlugin({
      extensions: ['.js'],
      paths: ['build']
    })
  ]
}

export default config
