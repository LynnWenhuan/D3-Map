const themeStyle = require('./styles').themeStyle;

const theme = {
  // 全局/品牌色
  'primary-color': themeStyle.brand_primary,
  '@icon-url': '"/fonts/iconfont/iconfont"',
};

module.exports = () => {
  return theme;
};
