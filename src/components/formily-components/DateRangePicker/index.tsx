import React, { useState } from 'react'
import { Button, Popup, DatePicker, Space } from 'antd-mobile'
import { connect, mapProps } from '@formily/react'
import dayjs from 'dayjs'

interface DateRangeValue {
  start?: Date
  end?: Date
}

interface DateRangePickerProps {
  value?: DateRangeValue
  onChange?: (val: DateRangeValue) => void
}

const BaseDateRangePicker: React.FC<DateRangePickerProps> = ({ value, onChange }) => {
  const [visible, setVisible] = useState(false)
  const [start, setStart] = useState<Date | undefined>(value?.start)
  const [end, setEnd] = useState<Date | undefined>(value?.end)
  const [step, setStep] = useState<'start' | 'end'>('start')

  const handleConfirm = () => {
    onChange?.({ start, end })
    setVisible(false)
  }

  return (
    <>
      <Button block onClick={() => {
        setStep('start')
        setVisible(true)
      }}>
        {value?.start && value?.end
          ? `${dayjs(value.start).format('YYYY-MM-DD')} ~ ${dayjs(value.end).format('YYYY-MM-DD')}`
          : '请选择日期范围'}
      </Button>

      <Popup
        visible={visible}
        onMaskClick={() => setVisible(false)}
        bodyStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
      >
        <div style={{ padding: 16 }}>
          <DatePicker
            title={step === 'start' ? '选择开始日期' : '选择结束日期'}
            value={step === 'start' ? start : end}
            onConfirm={val => {
              if (step === 'start') {
                setStart(val)
                setStep('end')
              } else {
                setEnd(val)
              }
            }}
          >
            {(_, actions) => (
              <Space block justify='around'>
                <Button onClick={() => actions.open()}>{step === 'start' ? '选择开始日期' : '选择结束日期'}</Button>
                {step === 'end' && (
                  <Button color='primary' onClick={handleConfirm}>
                    确认
                  </Button>
                )}
              </Space>
            )}
          </DatePicker>
        </div>
      </Popup>
    </>
  )
}

export const FormilyDateRangePicker = connect(
  BaseDateRangePicker,
  mapProps(
    {
      value: true,
    },
    (props, field) => ({
      value: field.value ?? { start: undefined, end: undefined },
      onChange: field.setValue,
    })
  )
)

