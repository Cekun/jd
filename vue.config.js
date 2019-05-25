module.exports = {
    configureWebpack:{
        devServer:{
            port: 8989,
            open: true, //自动打开网页
            before(app){
                //mock
            }
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
