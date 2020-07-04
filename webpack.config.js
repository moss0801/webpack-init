const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'plugin.js'
  },
  module: {
    rules: [ 
      { 
        test: /\.m?js$/, 
        exclude: /(node_modules|bower_components)/, 
        use: { 
          loader: 'babel-loader', 
          options: { 
            presets: ['@babel/preset-env'],
            plugins: ["@babel/plugin-proposal-class-properties"],
          } 
        } 
      } 
    ] 
  },
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development'
}