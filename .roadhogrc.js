const path = require('path');
const pxtorem = require('postcss-pxtorem');

const svgSpriteDirs = [
  require.resolve('antd').replace(/warn\.js$/, ''), // antd 内置svg
  path.resolve(__dirname, 'src/assets/svg'),  // 业务代码本地私有 svg 存放目录
];

export default {
  entry: 'src/index.js',
  theme: 'src/theme/theme.js',
  hash:true,
  // publicPath:"./",
  // devtool: 'eval',
  svgSpriteLoaderDirs: svgSpriteDirs,
  extraPostCSSPlugins: [],
  resolve: {
      alias: {
          d3: './public/d3.js',  
      }
  },
  extraBabelPlugins: [
    'transform-runtime',
    ['import', { 'libraryName': 'antd', 'libraryDirectory': 'lib', 'style': true }]
  ],
  env: {
    development: { // 开发环境
      extraBabelPlugins: [
        'dva-hmr',
      ],
      define: {
        SERVER: '',
        ID_CODE: '',
      }
    },
    uat: { // 测试环境
      define: {
        SERVER: '', 
        ID_CODE: '',
      }
    },
    production: { // 生产环境
      define: {
        SERVER: '', 
        ID_CODE: '',
      }
    }
  },
  define: {
    VERSION: require('./package.json').version
  },
}
