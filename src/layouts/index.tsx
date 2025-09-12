import { useEffect, useState } from 'react';
// @ts-ignore
import '@/assets/style/form.less';
import Components from '@/components/formily-components';
import { adaptSchemaForMobile } from '@/utils/schema';
import { useParams } from 'umi';
import './index.less';
// 单行文本， 多行文本，数值，评分，单选，复选，日期，日期区间，附件，下拉单选，下拉复选，级联选择，定位，
import { addFormData } from '@/services';
import { Submit } from '@formily/antd-mobile';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
import { Dialog, Slider } from 'antd-mobile';
const SchemaField = createSchemaField({
  components: {
    ...Components,

    Slider,
  },
});

const form = createForm();

export default () => {
  const params = useParams();
  const [schema, setScheam] = useState();
  const onSubmit = (values: any) => {
    Dialog.alert({
      content: JSON.stringify(values),
    });
  };
  useEffect(() => {
    // getFormDesignSchema(params.id).then(res => {
    //   console.log('res', res);
    //   if (res.code === 200) {
    //     const parseSchema = JSON.parse(res.data.schema);
    //     console.log('parseSchema', parseSchema);

    //     setScheam(parseSchema);
    //   }
    // });

    let parseSchema = {
      type: 'object',
      properties: {
        bnfmarw1mjb: {
          type: 'string',
          title: '单行文本',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'mobile-x-component': 'Input',
          'x-validator': [],
          'x-component-props': {},
          'x-decorator-props': {},
          'x-designable-id': 'bnfmarw1mjb',
          'x-index': 0,
          'mobile-x-component-props': {},
          'pc-x-component-props': {},
          'x-reactions': '',
        },
        wpsw52h827a: {
          type: 'number',
          title: '金额',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'mobile-x-component': 'MoneyInput',
          'x-validator': [
            {
              pattern: '^\\d+(\\.\\d{1,2})?$',
              triggerType: 'onBlur',
              message: '请输入正确的金额',
            },
          ],
          'x-component-props': {
            prefix: '￥',
          },
          'x-decorator-props': {},
          'x-designable-id': 'wpsw52h827a',
          'x-index': 1,
          'mobile-x-component-props': {},
          'pc-x-component-props': {},
          'x-reactions': '',
        },
        vb6lihhkpvl: {
          type: 'string',
          title: '多行文本',
          'x-decorator': 'FormItem',
          'x-component': 'Input.TextArea',
          'mobile-x-component': 'TextArea',
          'x-validator': [],
          'x-component-props': {},
          'x-decorator-props': {},
          'x-designable-id': 'vb6lihhkpvl',
          'x-index': 2,
          'mobile-x-component-props': {},
          'pc-x-component-props': {},
          'x-reactions': '',
        },
        '1abhdlbwkyb': {
          type: 'number',
          title: '数字输入',
          'x-decorator': 'FormItem',
          'mobile-x-component': 'NumberInput',
          'x-component': 'NumberPicker',
          'x-validator': [],
          'x-component-props': {},
          'x-decorator-props': {},
          'x-designable-id': '1abhdlbwkyb',
          'x-index': 3,
          'mobile-x-component-props': {},
          'pc-x-component-props': {},
          'x-reactions': '',
        },
        p8ch5401qkh: {
          type: 'Array<string | number>',
          title: '复选框',
          'x-decorator': 'FormItem',
          'x-component': 'Checkbox.Group',
          'mobile-x-component': 'Checkbox.Group',
          enum: [
            {
              label: '选项1',
              value: 1,
            },
            {
              label: '选项2',
              value: 2,
            },
          ],
          'x-validator': [],
          'x-decorator-props': {},
          'x-designable-id': 'p8ch5401qkh',
          'x-index': 4,
          'mobile-x-component-props': {},
          'pc-x-component-props': {},
          'x-reactions': '',
        },
        '13n2btrfwdq': {
          type: 'string | number',
          title: '单选框',
          'x-decorator': 'FormItem',
          'x-component': 'Radio.Group',
          'mobile-x-component': 'Radio.Group',
          enum: [
            {
              label: '选项1',
              value: 1,
            },
            {
              label: '选项2',
              value: 2,
            },
          ],
          'x-validator': [],
          'x-component-props': {},
          'x-decorator-props': {},
          'x-designable-id': '13n2btrfwdq',
          'x-index': 5,
          'mobile-x-component-props': {},
          'pc-x-component-props': {},
          'x-reactions': '',
        },
        nscgs6xk3zn: {
          title: '下拉单选',
          'x-decorator': 'FormItem',
          'x-component': 'Select',
          'mobile-x-component': 'Select.Single',
          'x-component-props': {
            mode: 'single',
          },
          type: 'string',
          'x-validator': [],
          'x-decorator-props': {},
          'x-designable-id': 'nscgs6xk3zn',
          'x-index': 6,
          'mobile-x-component-props': {},
          'pc-x-component-props': {},
          'x-reactions': '',
        },
        eb1sl47ay3x: {
          title: '下拉多选',
          'x-decorator': 'FormItem',
          'x-component': 'Select',
          'mobile-x-component': 'Select.Multiple',
          'x-component-props': {
            mode: 'multiple',
          },
          type: 'array',
          'x-item-type': 'string',
          'x-validator': [],
          'x-decorator-props': {},
          'x-designable-id': 'eb1sl47ay3x',
          'x-index': 7,
          'mobile-x-component-props': {},
          'pc-x-component-props': {},
          'x-reactions': '',
        },
        b7t8teskeqo: {
          type: 'string',
          title: '日期选择',
          'x-decorator': 'FormItem',
          'x-component': 'DatePicker',
          'mobile-x-component': 'DatePicker',
          'x-validator': [],
          'x-component-props': {},
          'x-decorator-props': {},
          'x-designable-id': 'b7t8teskeqo',
          'x-index': 8,
          'mobile-x-component-props': {},
          'pc-x-component-props': {},
          'x-reactions': '',
        },
        drc4ngi618m: {
          type: 'string[]',
          title: '日期范围',
          'x-decorator': 'FormItem',
          'mobile-x-component': 'DateRangePicker',
          'x-component': 'DatePicker.RangePicker',
          'x-validator': [],
          'x-component-props': {},
          'x-decorator-props': {},
          'x-designable-id': 'drc4ngi618m',
          'x-index': 9,
          'mobile-x-component-props': {},
          'pc-x-component-props': {},
          'x-reactions': '',
        },
        x9qxfnk07ft: {
          type: 'boolean',
          title: '开关',
          'x-decorator': 'FormItem',
          'x-component': 'Switch',
          'mobile-x-component': 'Switch',
          'x-validator': [],
          'x-component-props': {},
          'x-decorator-props': {},
          'x-designable-id': 'x9qxfnk07ft',
          'x-index': 10,
          'mobile-x-component-props': {},
          'pc-x-component-props': {},
          'x-reactions': '',
        },
        vrhi4u70csc: {
          title: '级联选择器',
          'x-decorator': 'FormItem',
          'x-component': 'Cascader',
          'moble-x-component': 'CascadePicker',
          'x-validator': [],
          'x-component-props': {},
          'x-decorator-props': {},
          'x-designable-id': 'vrhi4u70csc',
          'x-index': 11,
          'mobile-x-component-props': {},
          'pc-x-component-props': {},
          'x-reactions': '',
        },
        gz842obfx6w: {
          type: 'string',
          title: '时间选择器',
          'x-decorator': 'FormItem',
          'mobile-x-component': 'TimePicker',
          'x-component': 'TimePicker',
          'x-validator': [],
          'x-component-props': {},
          'x-decorator-props': {},
          'x-designable-id': 'gz842obfx6w',
          'x-index': 12,
          'mobile-x-component-props': {},
          'pc-x-component-props': {},
          'x-reactions': '',
        },
        '9apk7h96k1o': {
          type: 'string[]',
          title: '时间范围选择器',
          'x-decorator': 'FormItem',
          'x-component': 'TimePicker.RangePicker',
          'mobile-x-component': 'TimeRangePicker',
          'x-validator': [],
          'x-component-props': {},
          'x-decorator-props': {},
          'x-designable-id': '9apk7h96k1o',
          'x-index': 13,
          'mobile-x-component-props': {},
          'pc-x-component-props': {},
          'x-reactions': '',
        },
        f4b8hoczsdw: {
          type: 'void',
          title: '上传',
          'x-component': 'FormilyUpload',
          'mobile-x-component': 'Upload',
          'x-decorator': 'FormItem',
          'x-component-props': {
            listType: 'text',
            textContent: '上传文件',
            heardTitle: '标题',
          },
          'x-validator': [],
          'x-decorator-props': {},
          'x-designable-id': 'f4b8hoczsdw',
          'x-index': 14,
          'mobile-x-component-props': {},
          'pc-x-component-props': {},
          'x-reactions': '',
        },
        ek2z2yuno11: {
          type: 'void',
          title: '上传图片',
          'x-component': 'FormilyUpload',
          'mobile-x-component': 'ImageUpload',
          'x-decorator': 'FormItem',
          'x-component-props': {
            listType: 'picture-card',
            textContent: '上传图片',
            accept: 'image/*',
            heardTitle: '标题',
          },
          'x-validator': [],
          'x-decorator-props': {},
          'x-designable-id': 'ek2z2yuno11',
          'x-index': 15,
          'mobile-x-component-props': {},
          'pc-x-component-props': {},
          'x-reactions': '',
        },
        '0y1813pu5d9': {
          type: 'Array<object>',
          title: '附件上传',
          'x-decorator': 'FormItem',
          'x-component': 'Upload.Dragger',
          'x-component-props': {
            textContent: '点击或拖拽文件到这个区域',
          },
          'x-designable-id': '0y1813pu5d9',
          'x-index': 16,
          'mobile-x-component-props': {},
          'pc-x-component-props': {},
          'x-reactions': '',
        },
      },
      'x-designable-id': 'y1zf866ca0x',
    };

    const finallySchema = adaptSchemaForMobile(parseSchema);
    console.log('finallySchema', finallySchema);

    setScheam(finallySchema);
  }, []);
  function handleSubmit() {
    addFormData({
      id: params.id,
      formData: form.values,
    }).then(res => {
      console.log('res', res);
    });
  }
  return (
    <div className='form-hhh'>
      <div className='formLayout'>
        <FormProvider form={form}>
          <SchemaField schema={schema} />
          <Submit onClick={handleSubmit}>提交</Submit>
        </FormProvider>
      </div>
    </div>
  );
};
