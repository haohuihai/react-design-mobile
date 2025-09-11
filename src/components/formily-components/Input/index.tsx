import { Input } from 'antd-mobile';
import { connect, mapProps } from '@formily/react';
interface InputProps {
  value: {value: string, type: string}; 
  onChange: (val: {value: string, type: string}) => void;
}
const BaseInput: React.FC<InputProps> = ({ value, onChange, ...restProps }) => {
  const handleChange = (value: string) => {
   onChange({
    value: value,
    type: 'Input'
   }) 
  }

  return <Input placeholder='请输入' value={value.value as any} clearable type='' onChange={handleChange} {...restProps} />
  
};
export const FormilyInput = connect(
  BaseInput,
  mapProps({}, (props, field) => {
    return {
      value: field.data || { value: '', type: 'Input' },
      onChange: field.setData,
    };
  })
);
