import React from 'react';
import { connect, mapProps } from '@formily/react';
import { Checkbox } from 'antd-mobile';
export interface MyCheckboxGroupProps {
  options: { label: string; value: any }[];
  value?: any[];
  onChange?: (value: any[]) => void;
}

const BaseCheckboxGroup: React.FC<MyCheckboxGroupProps> = ({ options, value = [], onChange }) => {
  return (
    <Checkbox.Group value={value} onChange={onChange}>
      {options.map(item => (
        <Checkbox key={item.value} value={item.value}>
          {item.label}
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
};

// 通过 Formily 的 connect + mapProps 封装成 Schema 组件
export const FormilyCheckboxGroup = connect(
  BaseCheckboxGroup,
  mapProps(
    {
      dataSource: 'options', // 自动把 schema 中 enum 映射为 options
    },
    (props, field) => {
      return {
        value: field.value || [],
        onChange: field.setValue,
      };
    }
  )
);
