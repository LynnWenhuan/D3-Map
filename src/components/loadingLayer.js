import React from 'react';

import { Button } from 'antd';
// eslint-disable-next-line
import '!style!css!./loadingLayer.css';

const loadingSpin = require('../assets/loading.gif');

export default class LoadingLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingState: props.loadingState,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loadingState !== this.state.loadingState) {
      this.setState({
        loadingState: nextProps.loadingState,
      });
    }
  }

  reloadClick() {
    if (this.props.reload) {
      this.props.reload();
    }
  }

  render() {
    if (this.state.loadingState === 'done') {
      return null;
    }
    if (this.state.loadingState === 'error') {
      return (<div className="ms-loading-wrapper">
        <div className="ms-loading-bk" />
        <div className="ms-loading-content">
          <span className="ms-loading-text">网络异常</span>
          <Button onClick={this.reloadClick.bind(this)} className="ms-loading-button" type="primary">重新加载</Button>
        </div></div>);
    }
    return (<div className="ms-loading-wrapper">
      <div className="ms-loading-bk" />
      <div className="ms-loading-content">
        <img className="ms-loading-img" alt="" src={loadingSpin} />
        <span className="ms-loading-text">正在加载</span>
      </div></div>);
  }
}
