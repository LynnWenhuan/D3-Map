import React from 'react';
import { connect } from 'dva';
import { Input } from 'antd';

class ConditionItem extends React.Component {
  onChangeHandle(e) {
    this.props.dispatch({
      type: 'zbjk_zyzbfx/updateConditionValue',
      payload: {
        key: this.props.itemkey,
        value: e.target.value,
      },
    });
  }
  render() {
    // eslint-disable-next-line
    const { zbjk_zyzbfx, itemkey } = this.props;
    this.config = zbjk_zyzbfx[itemkey];
    const value = this.config.value;
    return (
      <div className="condition-item">
        <span className="condition-lable">{ this.props.label || ''}:</span>
        <Input value={value} style={{ width: '100px' }} onChange={this.onChangeHandle.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { zbjk_zyzbfx: state.zbjk_zyzbfx };
}

export default connect(mapStateToProps)(ConditionItem);
