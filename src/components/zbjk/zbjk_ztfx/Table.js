import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import { tableToMapData } from '../../../assets/data/data';


class ZtfyTable extends React.Component {
  componentDidMount() {
  }
  _onClick = (record) => {
    const mapName = tableToMapData[record.companyCode];
    if (mapName) {
      this.props.dispatch({
        type: 'zbjk_ztfx/mapToTable',
        payload: {
          name: mapName,
          key: 'companyCode',
        },
      });
    }
  }

  render() {
    const { zbjk_ztfx: { zbjkResponseData } } = this.props;
    const tableDataFn = () => {
      let source = [];
      let columns = [];
      if (zbjkResponseData) {
        source = zbjkResponseData.dataSource;
        columns = zbjkResponseData.columns;
        for (let i = 1; i <= source.length; i += 1) {
          source[i - 1].key = i;
          if (i < source.length) {
            source[i].order = i;
          }
        }
        for (let i = 1; i <= columns.length; i += 1) {
          columns[i - 1].key = i;
          if (i < columns.length && columns.length === 6) {
            columns[0].width = 40;
            columns[i].width = 105;
          } else if (i < columns.length && columns.length === 5) {
            columns[0].width = 40;
            columns[i].width = 150;
          }
        }
        columns[1].render = (text, record) => <a onClick={() => this._onClick(record)}>{text}</a>;
      }
      return [source, columns];
    };

    return (
      <Table
        dataSource={tableDataFn()[0]}
        columns={tableDataFn()[1]}
        scroll={{ x: 500, y: 400 }}
        pagination={false}
      />
    );
  }
}

function mapStateToProps(state) {
  return { zbjk_ztfx: state.zbjk_ztfx };
}
export default connect(mapStateToProps)(ZtfyTable);
