// components/MyCheckboxGroup.tsx
import React from 'react';
import { connect, mapProps } from '@formily/react';
import { Radio } from 'antd-mobile';
export interface MyRadioGroupProps {
  options: { label: string; value: any }[];
  value?: string | number;
  onChange?: (value: boolean) => void;
}

const BaseRadioGroup: React.FC<MyRadioGroupProps> = ({ options, value, onChange }) => {
  return (
    <Radio.Group value={value} onChange={onChange}>
      {options.map(item => (
        <Radio key={item.value} value={item.value} className='my-checkbox'>
          {item.label}
        </Radio>
      ))}
    </Radio.Group>
  );
};

// 通过 Formily 的 connect + mapProps 封装成 Schema 组件
export const FormilyRadioGroup = connect(
  BaseRadioGroup,
  mapProps(
    {
      dataSource: 'options', // 自动把 schema 中 enum 映射为 options
    },
    (props, field) => {
      return {
        value: field.value || '',
        onChange: field.setValue,
      };
    }
  )
);
