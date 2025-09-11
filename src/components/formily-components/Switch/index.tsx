import React from 'react'
import { Switch } from 'antd-mobile'
import { connect, mapProps } from '@formily/react'

interface SwitchProps {
  value?: {value: boolean, type: string}
  onChange: (val: {value: boolean, type: string}) => void;
  disabled?: boolean
}

const BaseSwitch: React.FC<SwitchProps> = ({ value, onChange, ...restProps }) => {
  const handleChange = (value: boolean) => {
   onChange({
    value: value,
    type: 'Input'
   }) 
  }
  return (
    <Switch
      checked={value?.value}
      onChange={handleChange}
      {...restProps}
    />
  )
}

export const FormilySwitch = connect(
  BaseSwitch,
  mapProps(
    {
      disabled: true,
    },
    (props, field) => ({
      value: field.data ?? {type: 'Switch', value: false}, // 默认 false
      onChange: field.setData,
    })
  )
)
