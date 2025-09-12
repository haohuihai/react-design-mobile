import Upload from '@/components/base-components/Upload';
import { connect, mapProps } from '@formily/react';
interface InputProps {
  value: string | number | undefined;
  onChange: (value: { value: string | number | undefined; type: string }) => void;
}
const BaseUpload: React.FC<InputProps> = ({ value, onChange, ...restProps }) => {
  const handleChange = (files: any[]) => {
    onChange({
      value: files[0].url,
      type: 'Upload',
    });
  };
  return <Upload action='/api/upload' maxCount={3} onChange={handleChange} {...restProps} />;
};
export const FormilyUpload = connect(
  BaseUpload,
  mapProps({}, (props, field) => {
    return {
      value: field.data || '',
      onChange: field.setData,
    };
  })
);
