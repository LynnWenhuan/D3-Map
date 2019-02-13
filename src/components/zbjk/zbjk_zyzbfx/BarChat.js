import { connect } from 'dva';
import React from 'react';
import { tableToMapData, branchData } from '../../../assets/data/data';

const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/line');
require('echarts/lib/chart/bar');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/markLine');
require('echarts/lib/component/title');
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["getxAxisAndData"] }] */
class BarChat extends React.Component {
  constructor(props) {
    super(props);
    this.domId = new Date().valueOf();
  }

  componentDidMount() {
    this.myChart = echarts.init(document.getElementById(this.domId));
    this.bindMapData(this.props);
  }

  componentWillReceiveProps(nextprops) {
    this.bindMapData(nextprops);
  }


  // eslint-disable-next-line
  parseFloat(v) {
    const value = v || 0;
    let str = value.toString();
    str = str.replace(/,/g, '');
    if (str.indexOf('%') < 0) {
      if (isNaN(str)) {
        return 0;
      }
    }
    let re = 0;
    try {
      re = parseFloat(str);
      // eslint-disable-next-line
    } catch (e) { }
    return re;
  }


  getxAxisAndData(index, SearchTableData, sort) {
    let curRelativeTableKey = null;
    let _name = null;
    const echart = this.props.zbjk_zyzbfx.echart; // 控制图表是否显示分公司
    // eslint-disable-next-line
    for (let i = 0, j = index.data.length; i < j; i++) {
      if (index.data[i].value === index.value) {
        curRelativeTableKey = index.data[i].relative;
        _name = index.data[i].label;
        break;
      }
    }
    const _xAxis = [];
    const _data = [];
    if (curRelativeTableKey && SearchTableData) {
      const result = [];
      // eslint-disable-next-line
      for (let i = 0, j = SearchTableData.dataSource.length; i < j; i++) {
        const rowData = SearchTableData.dataSource[i];
        const name = tableToMapData[rowData.companyCode] || branchData[rowData.companyCode];
        if (rowData.company !== '全国' && echart !== rowData.companyCode) {
          result.push({ x: name, y: this.parseFloat(rowData[curRelativeTableKey]) });
        }
      }

      if (sort.value === '升序') {
        result.sort((a, b) => {
          return this.parseFloat(a.y) - this.parseFloat(b.y);
        });
      } else if (sort.value === '降序') {
        result.sort((a, b) => {
          return this.parseFloat(b.y) - this.parseFloat(a.y);
        });
      }
      // 设置x、y轴的名称
      for (let i = 0, j = result.length; i < j; i += 1) {
        _xAxis.push(result[i].x);
        _data.push(result[i].y);
      }

      if (isNaN(_data[0])) {
        // 在切换指标的时候 在点击查询之前 不清除图表数据 取上一次的数据
        if (this.BarData) {
          // return this.BarData;
        }
      } else {
        this.BarData = {
          xAxis: _xAxis,
          data: _data,
          name: _name,
        };
      }
    }
    return {
      xAxis: _xAxis,
      data: _data,
      name: _name,
    };
  }

  bindMapData(props) {
    const { datumLine, index, SearchTableData, sort } = props.zbjk_zyzbfx;
    const xAxisAndData = this.getxAxisAndData(index, SearchTableData, sort);
    this.myChart.on('click', (param) => {
      this.props.dispatch({
        type: 'zbjk_zyzbfx/barSearch',
        payload: param.name,
      });
    });
    this.myChart.setOption({
      title: { text: ' ' },
      tooltip: {},
      xAxis: {
        data: xAxisAndData.xAxis,
        name: '分公司/机构',
        axisLabel: {
          interval: 0, // 横轴信息全部显示
          rotate: -30, // -30度角倾斜显示
        },
      },
      yAxis: {
        name: '单位:（万元）/比率',
      },
      series: [{
        name: xAxisAndData.name,
        type: 'bar',
        data: xAxisAndData.data,
        markLine: {
          data: [{
            name: '基线',
            // 支持 'average', 'min', 'max'
            yAxis: parseInt(datumLine.value, 10),
          }],
        },
      },
      ],
    });
  }
  render() {
    return (
      <div id={this.domId} style={{ height: '300px' }} />
    );
  }
}

function mapStateToProps(state) {
  return { zbjk_zyzbfx: state.zbjk_zyzbfx };
}
export default connect(mapStateToProps)(BarChat);
