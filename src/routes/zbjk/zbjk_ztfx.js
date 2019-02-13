import React from 'react';
import { connect } from 'dva';
// eslint-disable-next-line
import '!style!css!./css/zbjk_ztfx.css';
import { Button, message } from 'antd';
import TotalPrm from '../../components/zbjk/zbjk_ztfx/TotalPrm';
import NumRenewal from '../../components/zbjk/zbjk_ztfx/NumRenewal';
import Net from '../../components/zbjk/zbjk_ztfx/Net';

import Common from '../../components/zbjk/zbjk_ztfx/Common';
import Map from '../../components/zbjk/zbjk_ztfx/Map';
import { totalTreeData } from '../../assets/data/data';
import ZBJKTable from '../../components/zbjk/zbjk_ztfx/Table';
import LoadingLayer from '../../components/loadingLayer';
import { ID_CODE } from '../../config';


class Page extends React.Component {
  componentWillMount() {
    const zbjkZtfx = this.props.zbjk_ztfx;
    if (zbjkZtfx.lastFee.data.length <= 1) {
      this.props.dispatch({
        type: 'zbjk_ztfx/getZbjkData',
      });
    }
  }
  _onSearch = () => {
    this.props.dispatch({
      type: 'zbjk_ztfx/querQuotaData',
    });
  }
  _onExport = () => {
    const url = `${ID_CODE}/export`;
    const { zbjkResponseData, quota } = this.props.zbjk_ztfx;
    const requestData = { data: zbjkResponseData, fileName: quota.value };
    const data = zbjkResponseData ? JSON.stringify(requestData) : '';
    if (zbjkResponseData) {
      const form = document.createElement('form');
      form.setAttribute('style', 'display:none');
      form.setAttribute('method', 'post');
      form.setAttribute('target', '_blank');
      form.setAttribute('action', url);

      const input1 = document.createElement('input');
      input1.setAttribute('type', 'text');
      input1.setAttribute('name', 'data');
      input1.setAttribute('value', data);
      document.body.appendChild(form);
      form.append(input1);
      form.submit();
    } else {
      message.info('无数据导出');
    }
  }
  reload = () => {
    this.props.dispatch({
      type: 'zbjk_ztfx/getZbjkData',
    });
  }
  render() {
    const { zbjk_ztfx: { quota, loadingState, isexport } } = this.props;
    const totalPrm = ['totalPrm', 'growRate', 'timeAchievRate'];
    const netRate = ['netRate', 'expClaimFreq', 'avgNCD', 'avgAutoCoeff', 'floorRatio'];
    const dimension = () => {
      let selectDimension;
      if (totalPrm.indexOf(quota.value) !== -1) {
        selectDimension = <TotalPrm />;
      } else if (quota.value === 'numRenewalRate') {
        selectDimension = <NumRenewal />;
      } else if (netRate.indexOf(quota.value) !== -1) {
        selectDimension = <Net />;
      }
      return selectDimension;
    };
    return (
      <div style={{ minWidth: 1000, padding: '20px' }}>
        <LoadingLayer reload={this.reload} loadingState={loadingState} />
        <div>
          <div style={{ height: 120 }} className="zyzbfx-condition">
            <Common data={totalTreeData} />
            {dimension()}
          </div>
          <div >
            <Button style={{ marginLeft: 850 }} onClick={this._onSearch} type="primary" size="small">查询</Button>
            <Button style={{ marginLeft: 25 }} onClick={this._onExport} type="primary" disabled={!isexport} size="small">导出</Button>
          </div>
        </div>
        <div style={{ borderTop: '1px dashed #aaa', marginTop: '20px', paddingTop: '20px' }} />
        <div className="ms-map-content">
          <div className="ms-left-map">
            <Map />
          </div>
          <div className="ms-right-map">
            <ZBJKTable />
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { zbjk_ztfx: state.zbjk_ztfx };
}

export default connect(mapStateToProps)(Page);
