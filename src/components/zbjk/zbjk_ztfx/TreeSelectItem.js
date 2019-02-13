import React from 'react';
import { connect } from 'dva';
import { TreeSelect } from 'antd';

function TreeSelectP(props) {
  const { data, onTreeSelect, placeholder, selectedValue } = props;
  const dateDataFn = () => {
    let selectDate;
    if (data) {
      selectDate =
        (<TreeSelect
          style={{ maxWidth: '170px', marginRight: 15 }}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto', minWidth: 150 }}
          treeData={data}
          placeholder={placeholder}
          onChange={onTreeSelect}
          value={selectedValue}
        />);
    }
    return selectDate;
  };

  return (
    <span>
      {dateDataFn()}
    </span>
  );
}

export default connect()(TreeSelectP);
