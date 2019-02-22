module.exports = function override (config, env) {
  require('react-app-rewire-postcss')(config, {
    plugins: loader => [
      require('postcss-preset-env')(),
      require('autoprefixer')
    ]
  })

  return config
}
