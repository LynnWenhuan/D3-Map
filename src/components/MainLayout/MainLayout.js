import React from 'react';
// eslint-disable-next-line
import '!style!css!./MainLayout.css';
import { connect } from 'dva';
import { Route, withRouter } from 'dva/router';
import { Button } from 'antd';
import Menu from './Menu';

// const header = require('../../assets/indexTou.png');

// const { Header, Content, Footer, Sider } = Layout;

class MainLayout extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: 'user/getUserInfo',
    });
  }
  _onClick = () => {
    this.props.dispatch({
      type: 'user/logout',
    });
  }

  render() {
    const { match, user } = this.props;
    const name = user.userData ? user.userData.userName : '';

    return (
      <div className="ms-root">
        <div className="ms-top" >
          <div className="ms-top-left" style={{ width: 400 }} />
          <div className="ms-top-left-span" >
            <span style={{ fontSize: 35, color: 'black' }}>车险品质监控系统</span>
          </div>
          <div style={{ width: 300, position: 'absolute', right: '3%', top: 15 }} >
            <span style={{ fontSize: 22, marginRight: 20, color: 'black' }}>欢迎登录，{name}</span>
            <Button type="primary" size="small" onClick={this._onClick}>退出</Button>
          </div>
        </div>
        <Route path={`${match.path}`} component={Menu} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { menudata } = state.main;
  return {
    loading: state.loading.models.main,
    menudata,
    user: state.user,
    zbjk_ztfx: state.zbjk_ztfx,
  };
}

export default withRouter(connect(mapStateToProps)(MainLayout));
