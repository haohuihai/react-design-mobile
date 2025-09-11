import React from 'react'
import { TextArea } from 'antd-mobile'
import { connect, mapProps } from '@formily/react'

interface TextAreaProps {
  value?: { value: string, type: string }
  onChange: (val: {value: string, type: string}) => void
  placeholder?: string
  maxLength?: number
  autoSize?: boolean | { minRows?: number; maxRows?: number }
  disabled?: boolean
}

const BaseTextArea: React.FC<TextAreaProps> = ({ value, onChange, ...restProps }) => {
   const handleChange = (value: string) => {
   onChange({
    value: value,
    type: 'TextArea'
   }) 
  }
  return (
    <TextArea
      value={value?.value}
      onChange={handleChange}
      placeholder="请输入内容"
      {...restProps}
    />
  )
}

export const FormilyTextArea = connect(
  BaseTextArea,
  mapProps(
    {
      value: true,
      disabled: true,
    },
    (props, field) => ({
      value: field.data ?? {value: '', type: 'TextArea'},
      onChange: field.setData,
    })
  )
)
