import React, { useState } from 'react';
import { connect, mapProps } from '@formily/react';
import { DatePicker, Button } from 'antd-mobile';

const BaseDatePicker: React.FC<any> = ({ options, value, onChange }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        选择
      </Button>
      <DatePicker
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        precision='month'
        defaultValue={value ? new Date(value) : undefined}
        onConfirm={val => {
          onChange?.(val.toISOString());
          setVisible(false);
        }}
      />
    </>
  );
};

// 通过 Formily 的 connect + mapProps 封装成 Schema 组件
export const FormilyDatePicker = connect(
  BaseDatePicker,
  mapProps({}, (props, field) => {
    return {
      value: field.value,
      onChange: field.setValue,
    };
  })
);
