import React from 'react';
import { connect } from 'dva';
import TreeSelectItem from './TreeSelectItem';

class NumRenewalRate extends React.Component {
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
    const numData = [{ label: '渠道', value: 'channelClass' }, { label: '客户类别', value: 'custType' }];
    return (
      <div >
        {numData.map(item =>
          (<div className="condition-item"><span className="condition-lable" key={item.label}>{item.label}:</span>
            <TreeSelectItem data={zbjk_ztfx[item.value].data} placeholder={`请选择${item.label}`} onTreeSelect={value => this._onItemSelect(value, item.value)} selectedValue={zbjk_ztfx[item.value].value} />
          </div>),
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { zbjk_ztfx: state.zbjk_ztfx };
}

export default connect(mapStateToProps)(NumRenewalRate);
