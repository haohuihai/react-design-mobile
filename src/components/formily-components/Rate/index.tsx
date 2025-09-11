import React from 'react'
import { Rate } from 'antd-mobile'
import { connect, mapProps } from '@formily/react'

interface RateValue {
  type: 'Rate'
  value: number
}

interface FormilyRateProps {
  value?: RateValue
  onChange?: (val: RateValue) => void
  allowHalf?: boolean
  count?: number
}

const BaseRate: React.FC<FormilyRateProps> = ({ value, onChange, ...rest }) => {
  const currentValue = value?.value || 0

  return (
    <Rate
      value={currentValue}
      onChange={(val) => {
        onChange?.({ type: 'Rate', value: val })
      }}
      {...rest}
    />
  )
}

export const FormilyRate = connect(
  BaseRate,
  mapProps(
    {
      value: true,
      disabled: true,
    },
    (props, field) => ({
      value: field.data ?? { type: 'Rate', value: 0 },
      onChange: field.setData,
    })
  )
)
