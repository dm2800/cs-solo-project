# cs-solo-project
  /*
 devServer: {
    host: 'localhost',
    port: 8080,
    // match the output path
    static: {
      directory: path.resolve(__dirname, 'dist'),
      // match the output 'publicPath'
      publicPath: '/',
    },
    // enable HMR on the devServer
    hot: true,
    open: true,
    // fallback to root for other url
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    // Represents express server
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000/',
        secure: false,
        //changeOrigin: true // What does this do?
      },
    },
  },


  /*




  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, "./build"),
  //     publicPath: '/',
  //   },
  //   hot: true
  //   // proxy: [
  //   //   {
  //   //     context: ["/"],
  //   //     target: "http://localhost:7000",
  //   //   },
  //   // ],
  // },

{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}

