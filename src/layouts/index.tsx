import { useEffect, useState } from 'react';
// @ts-ignore
import '@/assets/style/form.less';
import Components from '@/components/formily-components';
import { useParams } from 'umi';
import './index.less';
import { adaptSchemaForMobile } from '@/utils/schema'
// 单行文本， 多行文本，数值，评分，单选，复选，日期，日期区间，附件，下拉单选，下拉复选，级联选择，定位，
import { addFormData, getFormDesignSchema } from '@/services';
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
    "type": "object",
    "properties": {
        "pwhtgq4na9r": {
            "type": "string",
            "title": "单行文本",
            "x-decorator": "FormItem",
            "x-component": "Input",
            "mobile-x-component": "Input",
            "x-validator": [],
            "x-component-props": {},
            "x-decorator-props": {},
            "x-designable-id": "pwhtgq4na9r",
            "x-index": 0,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        },
        "qxi2ipvwm2l": {
            "type": "number",
            "title": "金额",
            "x-decorator": "FormItem",
            "x-component": "Input",
            "mobile-x-component": "MoneyInput",
            "x-validator": [
                {
                    "pattern": "^\\d+(\\.\\d{1,2})?$",
                    "triggerType": "onBlur",
                    "message": "请输入正确的金额"
                }
            ],
            "x-component-props": {
                "prefix": "￥"
            },
            "x-decorator-props": {},
            "x-designable-id": "qxi2ipvwm2l",
            "x-index": 1,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        },
        "xxt9yu9vye9": {
            "type": "string",
            "title": "多行文本",
            "x-decorator": "FormItem",
            "x-component": "Input.TextArea",
            "mobile-x-component": "TextArea",
            "x-validator": [],
            "x-component-props": {},
            "x-decorator-props": {},
            "x-designable-id": "xxt9yu9vye9",
            "x-index": 2,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        },
        "a0drqx0f8w1": {
            "type": "number",
            "title": "数字输入",
            "x-decorator": "FormItem",
            "mobile-x-component": "NumberInput",
            "x-component": "NumberPicker",
            "x-validator": [],
            "x-component-props": {},
            "x-decorator-props": {},
            "x-designable-id": "a0drqx0f8w1",
            "x-index": 3,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        }
    },
    "x-designable-id": "vys42wurbfm"
}

    const finallySchema = adaptSchemaForMobile(parseSchema)
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
