import React from 'react';
import { connect } from 'dva';
import { Select } from 'antd';

function SlelctP(props) {
  const Option = Select.Option;
  const { data, onChange, placeholder, selectedValue } = props;
  const dateDataFn = () => {
    let selectDate;
    if (data) {
      selectDate =
        (<Select
          style={{ maxWidth: '170px', marginRight: 15 }}
          onSelect={onChange}
          placeholder={placeholder}
          value={selectedValue}
        >
          {data.map(item => <Option value={item.value} key={item.value}>{item.label}</Option>)}
        </Select>);
    }
    return selectDate;
  };

  return (
    <span>
      {dateDataFn()}
    </span>
  );
}

export default connect()(SlelctP);
