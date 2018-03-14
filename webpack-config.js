module.exports = {

  devtool: '#eval',
  watch: false,

  entry: { app: './src/js/index.js' },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },


  output: {
    filename: "[name].bundled.js",
    pathinfo: true,
    sourceMapFilename: "[file].js.map"
  }
};


