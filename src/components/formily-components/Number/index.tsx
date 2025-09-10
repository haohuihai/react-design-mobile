import React from 'react'
import { Input } from 'antd-mobile'
import { connect, mapProps } from '@formily/react'

interface InputProps {
  value?: string | number
  onChange?: (val: string | number) => void
  placeholder?: string
}

// 基础组件，增加输入限制
const BaseNumberInput: React.FC<InputProps> = ({ value, onChange, ...restProps }) => {
  const handleChange = (val: string) => {
    // 只允许输入数字和小数点
    let formatted = val.replace(/[^\d.]/g, '')
    // 只能保留一个小数点
    formatted = formatted.replace(/^(\d*\.)(.*)\./, '$1$2')
    // 可选：限制两位小数
    formatted = formatted.replace(/^(\d+\.?\d{0,2}).*/, '$1')

    // 如果需要把数字类型存成 number
    const num = formatted ? Number(formatted) : ''
    onChange?.(num)
  }

  return (
    <Input
      placeholder="请输入数字"
      value={value as any}
      onChange={handleChange}
      clearable
      {...restProps}
    />
  )
}

// 绑定 Formily
export const FormilyNumberInput = connect(
  BaseNumberInput,
  mapProps(
    {},
    (props, field) => ({
      value: field.data ?? '',
      onChange: field.setData,
    })
  )
)
