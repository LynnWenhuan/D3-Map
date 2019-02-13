/**
 * Created by LynnLin on 2017/11/15.
 */
import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Row, Col, AutoComplete } from 'antd';
import styles from './Users.css';
import IdCode from './IdCode';
// import CheckUtils from '../../libs/utils/CheckUtils';
// import { ID_CODE } from '../../config';

const Option = AutoComplete.Option;
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class UsersView extends React.Component {
  state = {
    result: [],
  }
  componentWillMount() {
    // this.props.dispatch({
    //   type: 'user/getPubilcKey',
    // });
  }
  componentDidMount() {
  }
  _login = (e) => {
    e.preventDefault();
    // const user = this.props.user;
    // if (!CheckUtils.checkEmail(user.account)) {
    //   message.info('请输入正确的邮箱账号');
    // } else if (!user.password) {
    //   message.info('请输入密码');
    // } else if (!user.verifyCode) {
    //   message.info('请输入正确验证码');
    // } else {
    //   this.props.onLogin();
    // }
    this.props.onLogin();
  }
  handleChange = (value) => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['sinosafe.com.cn', 'virtual.com.cn'].map(domain => `${value}@${domain}`);
    }
    this.setState({ result });
    this.props.dispatch({
      type: 'user/save',
      payload: { account: value },
    });
  }
  render() {
    const { result } = this.state;
    const { form: {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } } = this.props;
    const userNameError = isFieldTouched('account') && getFieldError('account');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    const FormItem = Form.Item;
    const children = result.map((email) => {
      return <Option key={email}>{email}</Option>;
    });
    // const { zbjk_ztfx: { zbjkResponseData } } = this.props;
    // const url = `${ID_CODE}/export/?data=${zbjkResponseData}`;
    return (
      <div className={styles.main}>
        <div style={{ height: 30 }} />
        <div >
          <Row style={{ height: 15 }} />
          <Form onSubmit={this._login} >
            <FormItem
              className={styles.antFormItem}
              validateStatus={userNameError ? 'error' : ''}
              help={userNameError || ''}
            >
              <Col span={3} offset={4}>
                <span style={{ width: 20 }}>用户名：</span>
              </Col >
              <Col span={1}>
                <Icon type="user" style={{ fontSize: 16 }} />
              </Col >
              <Col span={10}>
                {getFieldDecorator('account', {
                  rules: [{ required: true, message: '请输入用户名' }],
                })(
                  <AutoComplete style={{ width: 250 }} onChange={this.handleChange} placeholder="邮箱" >
                    {children}
                  </AutoComplete>,
                )}
              </Col >
            </FormItem>
            <FormItem
              className={styles.antFormItem}
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              <Col span={3} offset={4}>
                <span style={{ width: 50 }}>密码：</span>
              </Col >
              <Col span={1}>
                <Icon type="lock" style={{ fontSize: 16 }} />
              </Col >
              <Col span={10}>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码' }],
                })(
                  <Input type="password" placeholder="密码" style={{ width: 250 }} />,
                )}
              </Col >
            </FormItem>
            <IdCode />
            <FormItem>
              <Col span={6} offset={4}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.loginButton}
                  disabled={hasErrors(getFieldsError())}
                >
                  登录
                </Button>
              </Col>
            </FormItem>
          </Form>
        </div>
        <div>
          <span className={styles.tip} style={{ fontWeight: 'bold' }}>
            安全小提示
          </span>
        </div>
        <Row style={{ height: 10 }} />
        <div>
          <span className={styles.tip}>
            如您未获授权使用这私人电脑系统，请立即离开。在未发通知或未获允许情况下，所有系统行为会受监控及记录。
          </span>
        </div>
        <div>
          <span className={styles.tip}>
            If you are not authorized to access this private computer system,disconnect now.
          All activities on this system will be monitored and recorded without prior
          notification or permission.
          </span>
        </div>
        <Row style={{ height: 30 }} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user, loading: state.loading.models.user };
}

export default connect(mapStateToProps)(Form.create({
  onFieldsChange(props, fields) {
    props.dispatch({
      type: 'user/save',
      payload: fields,
    });
  },
})(UsersView));
