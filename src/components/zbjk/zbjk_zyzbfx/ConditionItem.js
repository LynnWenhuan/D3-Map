import React from 'react';
import { connect } from 'dva';
import { Select, TreeSelect } from 'antd';

const Option = Select.Option;

class ConditionItem extends React.Component {
  onChangeHandle(value) {
    this._change(value, false);
  }

  _change(value) {
    const reValue = value;

    if (reValue === undefined) {
      return;
    }
    this.props.dispatch({
      type: 'zbjk_zyzbfx/updateConditionValue',
      payload: {
        key: this.props.itemkey,
        value: reValue,
      },
    });
  }

  render() {
    this.type = this.props.type || '';
    // eslint-disable-next-line
    const { zbjk_zyzbfx, itemkey } = this.props;
    if (zbjk_zyzbfx.show.indexOf(itemkey) < 0) {
      return null;
    }
    this.config = zbjk_zyzbfx[itemkey];
    const selectedValue = this.config.value;
    const data = this.config.data || [];
    let options = [];
    for (let i = 0, j = data.length; i < j; i += 1) {
      const itemData = data[i];
      options.push(<Option value={itemData.value} key={itemData.value}>{itemData.label}</Option>);
    }
    let dropdownWidth = '110px';
    let WrapperSelect = Select;
    if (this.props.isTreeSelect) {
      WrapperSelect = TreeSelect;
      options = null;
      dropdownWidth = '150px';
    }
    return (
      <div className="condition-item">
        <span className="condition-lable">{this.props.label || ''}:</span>
        <WrapperSelect
          treeData={data}
          dropdownStyle={{ maxHeight: 400, minWidth: dropdownWidth, overflow: 'auto' }}
          value={selectedValue}
          style={{ maxWidth: '170px' }}
          onChange={this.onChangeHandle.bind(this)}
        >
          {options}
        </WrapperSelect>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { zbjk_zyzbfx: state.zbjk_zyzbfx };
}

export default connect(mapStateToProps)(ConditionItem);
