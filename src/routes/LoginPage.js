import React from 'react';
import { connect } from 'dva';
import Users from '../components/User/Users';

class LoginPage extends React.Component {
  onLogin() {
    this.props.dispatch({
      type: 'user/login',
    });
  }

  render() {
    return (
      <div>
        <Users onLogin={this.onLogin.bind(this)} />
      </div>
    );
  }
}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LoginPage);
