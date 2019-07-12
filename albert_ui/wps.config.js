const path = require('path')
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve')
const webpackConfig = require('./webpack.config')
const { PATHS } = require('./constants')

const {
  plugins,
  entry,
  resolve,
  output: {
    publicPath,
  },
} = webpackConfig

const serveOptions = {
  port: 8080,
  historyFallback: {
    index: path.join(publicPath, 'index.html'),
    verbose: true,
  },
  client: {
    retry: true,
  },
  static: [
    PATHS.build,
  ],
}

const config = {
  ...webpackConfig,
  mode: 'development',
  entry: [
    'webpack-plugin-serve/client',
    ...entry,
  ],
  plugins: [
    ...plugins,
    new Serve(serveOptions),
  ],
  // Hot loader
  resolve: {
    ...resolve,
    alias: {
      ...resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    },
  },
  watch: true,
}

module.exports = config
