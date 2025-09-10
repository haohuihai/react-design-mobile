import React, { useState } from 'react'
import { Input, Popup, List, Radio } from 'antd-mobile'
import { connect, mapProps } from '@formily/react'

interface Option {
  label: string
  value: string | number
}

interface SelectSingleProps {
  value?: { label: string; value: string | number }
  onChange?: (val: { label: string; value: string | number }) => void
  options?: Option[]
  placeholder?: string
}

const SelectSingle: React.FC<SelectSingleProps> = ({ value, onChange, options = [], placeholder }) => {
  const [visible, setVisible] = useState(false)

  const selectedLabel = value?.label || ''

  return (
    <>
      <Input
        readOnly
        placeholder={placeholder || '请选择'}
        value={selectedLabel}
        onClick={() => setVisible(true)}
      />

      <Popup
        visible={visible}
        onMaskClick={() => setVisible(false)}
        position="bottom"
        bodyStyle={{ height: '40vh' }}
      >
        <List>
          {options.map(opt => (
            <List.Item
              key={opt.value}
              onClick={() => {
                onChange?.(opt) // 直接返回 {label, value}
                setVisible(false)
              }}
              arrow={false}
            >
              <Radio checked={opt.value === value?.value}>{opt.label}</Radio>
            </List.Item>
          ))}
        </List>
      </Popup>
    </>
  )
}

export const FormilySelectSingle = connect(
  SelectSingle,
  mapProps(
    { options: true },
    (props, field) => ({
      value: field.data, // {label, value}
      onChange: field.setData,
    })
  )
)
