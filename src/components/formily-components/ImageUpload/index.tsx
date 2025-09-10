import React from 'react'
import { connect, mapProps } from '@formily/react'
import { ImageUploader as AMImageUploader } from 'antd-mobile'

interface UploadFile {
  name: string
  url: string
  [key: string]: any
}

interface FormilyImageUploadProps {
  value?: { type: string; value: UploadFile[] }
  onChange?: (val: { type: string; value: UploadFile[] }) => void
  maxCount?: number
  placeholder?: string
}

const BaseImageUpload: React.FC<FormilyImageUploadProps> = ({
  value,
  onChange,
  maxCount = 5,
  placeholder,
}) => {
  const fileList = value?.value || []

  const handleChange = (files: UploadFile[]) => {
    onChange?.({
      type: 'ImageUpload',
      value: files.map(file => ({
        name: file.name,
        url: file.url,
      })),
    })
  }

  return (
    <AMImageUploader
      value={fileList}
      onChange={handleChange}
      maxCount={maxCount}
      uploadText={placeholder || '点击上传图片'}
    />
  )
}

export const FormilyImageUpload = connect(
  BaseImageUpload,
  mapProps(
    {},
    (props, field) => ({
      value: field.data || { type: 'ImageUpload', value: [] },
      onChange: field.setData,
    })
  )
)
