import React from 'react';
import { connect } from 'dva';

class Page extends React.Component {
  render() {
    return <div>高风险类指标预警</div>;
  }
}


export default connect()(Page);
