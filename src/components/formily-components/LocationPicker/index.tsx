import { Input } from 'antd-mobile';
import { connect, mapProps } from '@formily/react';
interface InputProps {
  value: string | number | undefined;
  onChange: () => void;
}
const BaseInput: React.FC<InputProps> = ({ value, onChange, ...restProps }) => (
  <Input placeholder='请输入' value={value} clearable type='' onChange={onChange} {...restProps} />
);
export const FormilyLocationPicker = connect(
  BaseInput,
  mapProps({}, (props, field) => {
    return {
      value: field.value || '',
      onChange: field.setValue,
    };
  })
);
