import React from 'react';
import { connect } from 'dva';
// eslint-disable-next-line
import '!style!css!./css/zbjk_zyzbfx.css';
import { Button, message } from 'antd';
import BarChat from '../../components/zbjk/zbjk_zyzbfx/BarChat';
import ZYZBFXTable from '../../components/zbjk/zbjk_zyzbfx/Table';

import ConditionItem from '../../components/zbjk/zbjk_zyzbfx/ConditionItem';
import ConditionInputItem from '../../components/zbjk/zbjk_zyzbfx/ConditionInput';
import LoadingLayer from '../../components/loadingLayer';
import { ID_CODE } from '../../config';
import { exportName } from '../../assets/data/data';

class Page extends React.Component {
  componentDidMount() {
    const zbjkZyzbfx = this.props.zbjk_zyzbfx;
    if (zbjkZyzbfx.injured.data.length <= 1) {
      this.props.dispatch({
        type: 'zbjk_zyzbfx/getAllIndexsAndDimensions',
      });
    }
  }

  setMapData = () => {
    const url = `${ID_CODE}/export`;
    const { SearchTableData, isexport } = this.props.zbjk_zyzbfx;
    const name = exportName[isexport];
    const requestData = { data: SearchTableData, fileName: name };
    const data = SearchTableData ? JSON.stringify(requestData) : '';
    if (SearchTableData) {
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

  searchHandle = () => {
    // eslint-disable-next-line
    this.props.dispatch({
      type: 'zbjk_zyzbfx/search',
    });
  }

  reload() {
    if (this.props.zbjk_zyzbfx.loadConditionSuccess) {
      this.props.dispatch({
        type: 'zbjk_zyzbfx/search',
      });
    } else {
      this.props.dispatch({
        type: 'zbjk_zyzbfx/getAllIndexsAndDimensions',
      });
    }
  }
  render() {
    // eslint-disable-next-line
    const { zbjk_zyzbfx } = this.props;

    return (
      <div style={{ minWidth: 1000, position: 'relative', height: '100%', padding: '20px' }}>
        <LoadingLayer reload={this.reload.bind(this)} loadingState={zbjk_zyzbfx.loadingState} />
        <div>
          <div className="zyzbfx-condition">
            <ConditionItem itemkey="indicator" label="指标" />
            <ConditionItem itemkey="endMonth" isTreeSelect={'true'} label="统计时点" />
            <ConditionItem itemkey="companyCode" isTreeSelect={'true'} label="机构" />
            <ConditionItem itemkey="riskCode" isTreeSelect={'true'} label="险种" />
            {/* <ConditionItem itemkey="riskCodeSimple" label="险种" /> */}
            <ConditionItem itemkey="channelClass" isTreeSelect={'true'} label="渠道" />
            <ConditionItem itemkey="combine" label="险别组合" />
            <ConditionItem itemkey="custType" isTreeSelect={'true'} label="客户类别" />
            <ConditionItem itemkey="isGroup" label="团散单" />
            <ConditionItem itemkey="tonGrounp" label="吨位分组" />
            <ConditionItem itemkey="appType" label="投保类型" />
            <ConditionItem itemkey="insuredAge" label="被保险人年龄" />
            <ConditionItem itemkey="lastRecord" label="上年出险记录" />
            <ConditionItem itemkey="lastFee" label="上年出险金额" />
            <ConditionItem itemkey="injured" label="是否人伤" />
            <ConditionItem itemkey="bigCase" label="是否重案" />
            <ConditionItem itemkey="tonGroup" label="吨位分组" />
          </div>
          <div>
            <Button style={{ marginLeft: 850 }} onClick={this.searchHandle} type="primary" size="small">查询</Button>
            <Button style={{ marginLeft: 25 }} onClick={this.setMapData} type="primary" size="small" >导出</Button>
          </div>
        </div>
        <div style={{ borderTop: '1px dashed #aaa', marginTop: '20px', paddingTop: '20px' }}>
          <div className="zyzbfx-condition" style={{ height: 40 }}>
            <ConditionItem itemkey="index" label="图示指标" />
            <ConditionItem itemkey="sort" label="排序" />
            <ConditionInputItem itemkey="datumLine" label="基线" />
          </div>

          <BarChat />
        </div>
        <div className="ms-zyzbfx-table-wrapper">
          <ZYZBFXTable />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { zbjk_zyzbfx: state.zbjk_zyzbfx };
}

export default connect(mapStateToProps)(Page);
