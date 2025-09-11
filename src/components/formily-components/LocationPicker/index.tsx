import React, { useState } from 'react'
import { Button, Popup, List, Input } from 'antd-mobile'
import { connect, mapProps } from '@formily/react'

interface LocationValue {
  value: string
  latitude: number
  longitude: number
  type: string
}

interface LocationPickerProps {
  value?: LocationValue
  onChange?: (val: LocationValue) => void
}

const BaseLocationPicker: React.FC<LocationPickerProps> = ({ value, onChange }) => {
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState(value?.value || '')
  const [lat, setLat] = useState(value?.latitude || 0)
  const [lng, setLng] = useState(value?.longitude || 0)

  const handleConfirm = () => {
    onChange?.({
      value:name,
      latitude: lat,
      longitude: lng,
      type: 'LocationPicker',
    })
    setVisible(false)
  }

  return (
    <>
      <Button block onClick={() => setVisible(true)}>
        {value?.value ? `已选择：${value.value}` : '请选择位置'}
      </Button>
      <Popup
        visible={visible}
        onMaskClick={() => setVisible(false)}
        bodyStyle={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px', minHeight: '40vh' }}
      >
        <List header="选择位置">
          <List.Item>
            <Input
              placeholder="输入位置名称"
              value={name}
              onChange={val => setName(val)}
            />
          </List.Item>
          <List.Item>
            <Input
              placeholder="输入纬度 latitude"
              type="number"
              value={lat || ''}
              onChange={val => setLat(Number(val))}
            />
          </List.Item>
          <List.Item>
            <Input
              placeholder="输入经度 longitude"
              type="number"
              value={lng || ''}
              onChange={val => setLng(Number(val))}
            />
          </List.Item>
        </List>
        <div style={{ padding: 16 }}>
          <Button block color="primary" onClick={handleConfirm}>
            确认
          </Button>
        </div>
      </Popup>
    </>
  )
}

export const FormilyLocationPicker = connect(
  BaseLocationPicker,
  mapProps(
    {
      value: true,
      disabled: true,
    },
    (props, field) => ({
      value: field.data,
      onChange: field.setData,
    })
  )
)
