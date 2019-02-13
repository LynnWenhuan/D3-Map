import React from 'react';
import { connect } from 'dva';
import SelectItem from './SelectItem';
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
    const isNewRisk = ['02', '020101'];
    const netData = [{ label: '渠道', value: 'channelClass' }, { label: '客户类别', value: 'custType' }];
    const netSData = [{ label: '团散单', value: 'isGroup' }, { label: '投保类型', value: 'appType' }];
    const netLData = isNewRisk.indexOf(zbjk_ztfx.riskCode.value) === -1 && zbjk_ztfx.riskCode.value ? [{ label: '险别组合', value: 'combine' }, { label: '上年出险记录', value: 'lastRecord' }, { label: '上年出险金额', value: 'lastFee' }] : [];
    return (
      <div >
        <div>
          {netData.map(item =>
            (<div className="condition-item"><span className="condition-lable" key={item.label}>{item.label}:</span>
              <TreeSelectItem data={zbjk_ztfx[item.value].data} placeholder={`请选择${item.label}`} onTreeSelect={value => this._onItemSelect(value, item.value)} selectedValue={zbjk_ztfx[item.value].value} />
            </div>),
          )}
          {netSData.map(item =>
            (<div className="condition-item"><span className="condition-lable" key={item.label}>{item.label}:</span>
              <SelectItem data={zbjk_ztfx[item.value].data} placeholder={`请选择${item.label}`} onChange={value => this._onItemSelect(value, item.value)} selectedValue={zbjk_ztfx[item.value].value} />
            </div>),
          )}
        </div>
        <div >
          {netLData.map(item =>
            (<div className="condition-item"><span className="condition-lable" key={item.label}>{item.label}:</span>
              <SelectItem data={zbjk_ztfx[item.value].data} placeholder={`请选择${item.label}`} onChange={value => this._onItemSelect(value, item.value)} selectedValue={zbjk_ztfx[item.value].value} />
            </div>),
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { zbjk_ztfx: state.zbjk_ztfx };
}
export default connect(mapStateToProps)(NumRenewalRate);
