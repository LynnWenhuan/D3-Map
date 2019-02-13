import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';

const WidthConfig = [1300, 1340, 2300, 1450, 1680];
// 如果还有哪个列需要增加箭头 需要在这里配置
const ArrowKeyConfig = {
  curYearOfTotalPrmIncome: {
    relativeKey: 'lastSameTimeOfTotalPrmIncome',
  },
};

class Map extends React.Component {
  componentWillReceiveProps() {

  }

  // eslint-disable-next-line
  parseFloat(v) {
    let re = 0;
    try {
      re = parseFloat(v);
      // eslint-disable-next-line
    } catch (e) { }
    return re;
  }

  // eslint-disable-next-line
  rowRender(text, record, columnInfo) {
    const CellKey = columnInfo.key;
    let arrow = null;
    if (ArrowKeyConfig[CellKey]) {
      const relativeKey = ArrowKeyConfig[CellKey].relativeKey;
      const relativeValue = record[relativeKey] || 0;
      if (this.parseFloat(relativeValue) > this.parseFloat(text)) {
        arrow = <i style={{ color: 'red', fontSize: '16px' }} className="anticon anticon-arrow-down" />;
      } else {
        arrow = <i style={{ color: 'green', fontSize: '16px' }} className="anticon anticon-arrow-up" />;
      }
    }
    return <span>{text}{arrow}</span>;
  }

  render() {
    const { SearchTableData, isexport } = this.props.zbjk_zyzbfx;
    const dataFuntion = () => {
      let dataSource = [];
      let columns = [];
      if (SearchTableData) {
        for (let i = 0; i < SearchTableData.columns.length; i += 1) {
          if (i < 2) {
            SearchTableData.columns[i].fixed = 'left';
            SearchTableData.columns[i].width = i === 0 ? 50 : 90;
          } else {
            // eslint-disable-next-line
            if(!SearchTableData.columns[i].children) {
              SearchTableData.columns[i].width = 90;
            }
          }
          if (SearchTableData.columns[i].children) {
            // eslint-disable-next-line
            for (let n = 0, m = SearchTableData.columns[i].children.length; n < m; n++) {
              SearchTableData.columns[i].children[n].width = isexport === 1 ? 120 : 104;
              SearchTableData.columns[i].children[n].render = (text, record) => {
                return this.rowRender(text, record, SearchTableData.columns[i].children[n]);
              };
            }
          } else {
            SearchTableData.columns[i].render = (text, record) => {
              return this.rowRender(text, record, SearchTableData.columns[i]);
            };
          }
        }
        // eslint-disable-next-line
        for (let i = 0, j = SearchTableData.dataSource.length; i < j; i += 1) {
          SearchTableData.dataSource[i].key = i + 1;
        }
        dataSource = SearchTableData.dataSource;
        columns = SearchTableData.columns;
      }
      return [dataSource, columns];
    };
    return (
      <div style={{ height: 500, overflowY: 'auto' }}>
        <Table
          bordered
          dataSource={dataFuntion()[0]}
          scroll={{ x: WidthConfig[isexport] || 1000, y: 400 }}
          columns={dataFuntion()[1]}
          pagination={false}
        /> </div>
    );
  }
}

function mapStateToProps(state) {
  return { zbjk_zyzbfx: state.zbjk_zyzbfx };
}

export default connect(mapStateToProps)(Map);
