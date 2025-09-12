import { connect, mapProps } from '@formily/react';
import { Checkbox, Input, List, Popup } from 'antd-mobile';
import React, { useState } from 'react';

interface Option {
  label: string;
  value: string | number;
}

interface SelectMultipleProps {
  value?: { label: string; value: string | number }[];
  onChange?: (val: { label: string; value: string | number }[]) => void;
  options?: Option[];
  placeholder?: string;
}

const SelectMultiple: React.FC<SelectMultipleProps> = ({
  value = [],
  onChange,
  options = [],
  placeholder,
}) => {
  const [visible, setVisible] = useState(false);

  const selectedLabels = value.map(v => v.label).join(', ');

  const toggleValue = (opt: Option) => {
    if (value.find(v => v.value === opt.value)) {
      onChange?.(value.filter(v => v.value !== opt.value));
    } else {
      onChange?.([...value, opt]);
    }
  };

  return (
    <>
      <div onClick={() => setVisible(true)}>
        <Input readOnly placeholder={placeholder || '请选择'} value={selectedLabels} />
      </div>
      <Popup
        visible={visible}
        onMaskClick={() => setVisible(false)}
        position='bottom'
        bodyStyle={{ height: '40vh' }}
      >
        <List>
          {options.map(opt => (
            <List.Item key={opt.value} onClick={() => toggleValue(opt)} arrow={false}>
              <Checkbox checked={!!value.find(v => v.value === opt.value)}>{opt.label}</Checkbox>
            </List.Item>
          ))}
        </List>
      </Popup>
    </>
  );
};

export const FormilySelectMultiple = connect(
  SelectMultiple,
  mapProps({ options: true }, (props, field) => ({
    value: field.data || [], // [{label, value}]
    onChange: field.setData,
  }))
);
