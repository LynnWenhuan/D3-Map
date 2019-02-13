/**
 * Created by LynnLin on 2017/11/15.
 */
import React from 'react';
import { connect } from 'dva';
import { Form, Input, Col } from 'antd';
import { createForm } from 'rc-form';
import styles from './Users.css';
import { ID_CODE } from '../../config';

class Idcode extends React.Component {
  state = {
    code: 1,
  }
  _onClick = () => {
    const changeCode = this.state.code + Math.floor(Math.random() * 11) + 1;
    this.setState({ code: changeCode });
  }
  render() {
    const { form: { getFieldDecorator } } = this.props;
    const FormItem = Form.Item;
    const idCodeUrl = `${ID_CODE}/getVerifyCode?${this.state.code}`;
    return (
      <FormItem className={styles.antFormItem}>
        <Col span={3} offset={4}>
          <span style={{ width: 50 }}>验证码：</span>
        </Col >
        <Col span={6} offset={1}>
          {getFieldDecorator('verifyCode')(
            <Input placeholder="请输入验证码" style={{ width: 120 }} />,
          )}
        </Col >
        <Col span={4} onClick={this._onClick}>
          <img src={idCodeUrl} alt="code" style={{ width: 100 }} />
        </Col >
      </FormItem>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user, loading: state.loading.models.user };
}

export default connect(mapStateToProps)(createForm({
  onFieldsChange(props, fields) {
    props.dispatch({
      type: 'user/save',
      payload: fields,
    });
  },
})(Idcode));
