import React from 'react';
import { connect } from 'dva';
import { Select } from 'antd';
import { totalTreeData } from '../../../assets/data/data';
import TreeSelectItem from './TreeSelectItem';
import SelectItem from './SelectItem';

class Common extends React.Component {
  _onSelect = (value) => {
    this.props.dispatch({
      type: 'zbjk_ztfx/updateConditionValue',
      payload: {
        key: 'quota',
        itemValue: value,
      },
    });
  }
  _onItemSelect = (value, item) => {
    const newValue = !value ? null : value;
    this.props.dispatch({
      type: 'zbjk_ztfx/updateConditionValue',
      payload: {
        key: item,
        itemValue: newValue,
      },
    });
  }
  isRiskCode = () => {
    // eslint-disable-next-line
    const { zbjk_ztfx } = this.props;

    const risk = ['timeAchievRate', 'annualPayRate', 'policyCastRate', 'mgnContributeRate', 'compCastRate', 'numRenewalRate', 'firstAlgeEstRate', 'firstAbsEstRate', 'totalEndCaseRate'];
    let riskData;
    if (risk.indexOf(zbjk_ztfx.quota.value) === -1) {
      riskData = (<div className="condition-item"><span className="condition-lable" key="riskCode" >险种:</span>
        <TreeSelectItem data={zbjk_ztfx.riskCode.data} placeholder="请选择险种" onTreeSelect={value => this._onItemSelect(value, 'riskCode')} selectedValue={zbjk_ztfx.riskCode.value} />
      </div>);
    } else {
      riskData = (<div className="condition-item"><span className="condition-lable" key="riskCodeSimple" >险种:</span>
        <SelectItem data={zbjk_ztfx.riskCodeSimple.data} placeholder="请选择险种" onChange={value => this._onItemSelect(value, 'riskCodeSimple')} selectedValue={zbjk_ztfx.riskCodeSimple.value} />
      </div>);
    }
    return riskData;
  }

  render() {
    const Option = Select.Option;
    const OptGroup = Select.OptGroup;
    // eslint-disable-next-line
    const { zbjk_ztfx } = this.props;
    const commonData = [{ label: '统计时点', value: 'endMonth' }, { label: '机构', value: 'companyCode' }];
    return (
      <div >
        <div className="condition-item">
          <span className="condition-lable">指标:</span>
          <Select
            defaultValue={totalTreeData[0].children[0].value}
            style={{ minWidth: '120px' }}
            onChange={this._onSelect}
          >
            <OptGroup label="保费类">
              {totalTreeData[0].children.map(
                item => <Option value={item.value} key={item.key}>{item.label}</Option>,
              )}
            </OptGroup>
            <OptGroup label="品质类">
              {totalTreeData[1].children1.map(
                item => <Option value={item.value} key={item.key}>{item.label}</Option>,
              )}
            </OptGroup>
            <OptGroup label="分析类">
              {totalTreeData[2].children2.map(
                item => <Option value={item.value} key={item.key}>{item.label}</Option>,
              )}
            </OptGroup>
          </Select>
        </div>
        <div className="condition-item">
          <span className="condition-lable">频度:</span>
          <Select defaultValue="1" style={{ minWidth: '120px', marginRight: 15 }} onChange={this.riskChange}>
            <Option value="1" key="1">月</Option>
          </Select>
        </div>

        {commonData.map(item =>
          (<div className="condition-item"><span className="condition-lable" key={item.label}>{item.label}:</span>
            <TreeSelectItem data={zbjk_ztfx[item.value].data} placeholder={`请选择${item.label}`} onTreeSelect={value => this._onItemSelect(value, item.value)} selectedValue={zbjk_ztfx[item.value].value} />
          </div>),
        )}

        {this.isRiskCode()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { zbjk_ztfx: state.zbjk_ztfx };
}
export default connect(mapStateToProps)(Common);
