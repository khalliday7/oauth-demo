module.exports = {
  scripts: {
    lint: {
      description: 'Lint source code to enforce code quality',
      script: 'eslint .',
    },
    start: {
      description: 'Run the development server',
      script: 'wp --config ./wps.config.js',
    },
    build: {
      description: 'Build static assets',
      script: 'wp --config ./webpack.config.js',
    },
  },
}
