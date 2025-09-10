import { Input } from 'antd-mobile';
import { connect, mapProps } from '@formily/react';
interface InputProps {
  value: string | number | undefined;
  onChange: () => void;
}
const BaseUpload: React.FC<InputProps> = ({ value, onChange, ...restProps }) => (
  <Upload placeholder='请输入' value={value} clearable type='' onChange={onChange} {...restProps} />
);
export const FormilyUpload = connect(
  BaseUpload,
  mapProps({}, (props, field) => {
    return {
      value: field.value || '',
      onChange: field.setValue,
    };
  })
);
