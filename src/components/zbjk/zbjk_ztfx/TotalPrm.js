import React from 'react';
import { connect } from 'dva';
import TreeSelectItem from './TreeSelectItem';

class TotalPrm extends React.Component {
  _onItemSelect = (value, item) => {
    this.props.dispatch({
      type: 'zbjk_ztfx/updateConditionValue',
      payload: {
        key: item,
        itemValue: value,
      },
    });
  }
  render() {
    // eslint-disable-next-line
    const { zbjk_ztfx } = this.props;
    return (
      <div >
        <div className="condition-item">
          <span className="condition-lable">渠道:</span>
          <TreeSelectItem
            data={zbjk_ztfx.channelClass.data}
            selectedValue={zbjk_ztfx.channelClass.value}
            placeholder="请选择渠道"
            onTreeSelect={value => this._onItemSelect(value, 'channelClass')}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { zbjk_ztfx: state.zbjk_ztfx };
}
export default connect(mapStateToProps)(TotalPrm);
