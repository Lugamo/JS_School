module.export = {
  entry: `${__dirname}/src/js/main.js`,
  output: {
    path: path.resolve(__,dirname, 'dist'),
    filename: 'build.js'
  }
};