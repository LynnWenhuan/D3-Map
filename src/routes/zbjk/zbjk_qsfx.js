import React from 'react';
import { connect } from 'dva';

class Page extends React.Component {
  render() {
    return <div>趋势分析</div>;
  }
}


export default connect()(Page);
