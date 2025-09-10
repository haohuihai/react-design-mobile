import { Input } from 'antd-mobile';
import { connect, mapProps } from '@formily/react';
import React from'react';

interface BaseInputProps  extends React.ComponentProps<typeof Input> {
  value: string;
  onChange: (value: string) => void;
}

const BaseInput: React.FC<BaseInputProps> = ({ value, onChange, ...restProps }) => (
  <Input clearable placeholder='请输入' value={value}  type='' onChange={onChange} {...restProps} />
);

export const FormilyMoneyInput = connect(
  BaseInput,
  mapProps({
    value: true,
    initialValue: 'defaultValue',
    disabled: true,
  }, (props, field) => {
    return {
      value: field.data || '',
      onChange: field.setData,
    };
  })
);


