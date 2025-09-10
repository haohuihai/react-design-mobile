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

  const aaa =  {
    "type": "object",
    "properties": {
        "t3zjywfg36z": {
            "type": "string",
            "title": "单行文本",
            "x-decorator": "FormItem",
            "x-component": "Input",
            "x-validator": [],
            "x-component-props": {},
            "x-decorator-props": {},
            "x-designable-id": "t3zjywfg36z",
            "x-index": 0,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        },
        "vzdmdrwocnh": {
            "type": "number",
            "title": "数字",
            "x-decorator": "FormItem",
            "x-component": "Input",
            "x-validator": [],
            "x-component-props": {},
            "x-decorator-props": {},
            "x-designable-id": "vzdmdrwocnh",
            "x-index": 1,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        },
        "f047sbmskgo": {
            "type": "string",
            "title": "多行文本",
            "x-decorator": "FormItem",
            "x-component": "Input.TextArea",
            "x-validator": [],
            "x-component-props": {},
            "x-decorator-props": {},
            "x-designable-id": "f047sbmskgo",
            "x-index": 2,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        },
        "ema3iqedd9h": {
            "type": "number",
            "title": "金额",
            "x-decorator": "FormItem",
            "x-component": "Input",
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
            "x-designable-id": "ema3iqedd9h",
            "x-index": 3,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        }
    },
    "x-designable-id": "cp7smcznzqq"
}
    let parseSchema = {
    "type": "object",
    "properties": {
        "16oz8f4l8pm": {
            "type": "Array<string | number>",
            "title": "复选框",
            "x-decorator": "FormItem",
            "x-component": "Checkbox.Group",
            "enum": [
                {
                    "label": "选项1",
                    "value": 1
                },
                {
                    "label": "选项2",
                    "value": 2
                }
            ],
            "x-validator": [],
            "x-decorator-props": {},
            "x-designable-id": "16oz8f4l8pm",
            "x-index": 0,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        },
        "kcqzeiu2mo8": {
            "type": "string | number",
            "title": "单选框",
            "x-decorator": "FormItem",
            "x-component": "Radio.Group",
            "enum": [
                {
                    "label": "选项1",
                    "value": 1
                },
                {
                    "label": "选项2",
                    "value": 2
                }
            ],
            "x-validator": [],
            "x-component-props": {},
            "x-decorator-props": {},
            "x-designable-id": "kcqzeiu2mo8",
            "x-index": 1,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        },
        "hsrko355ngk": {
            "title": "下拉单选",
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                "mode": "single"
            },
            "type": "string",
            "x-validator": [],
            "x-decorator-props": {},
            "x-designable-id": "hsrko355ngk",
            "x-index": 2,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        },
        "a1qh4r492xg": {
            "title": "下拉多选",
            "x-decorator": "FormItem",
            "x-component": "Select",
            "x-component-props": {
                "mode": "multiple"
            },
            "type": "array",
            "x-item-type": "string",
            "x-validator": [],
            "x-decorator-props": {},
            "x-designable-id": "a1qh4r492xg",
            "x-index": 3,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        },
        "1bt7stpd4og": {
            "type": "string",
            "title": "单行文本",
            "x-decorator": "FormItem",
            "x-component": "Input",
            "x-validator": [],
            "x-component-props": {},
            "x-decorator-props": {},
            "x-designable-id": "1bt7stpd4og",
            "x-index": 4,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        },
        "or2w7sh1dqm": {
            "type": "string",
            "title": "多行文本",
            "x-decorator": "FormItem",
            "x-component": "Input.TextArea",
            "x-validator": [],
            "x-component-props": {},
            "x-decorator-props": {},
            "x-designable-id": "or2w7sh1dqm",
            "x-index": 5,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        },
        "76a7wupfnbv": {
            "type": "number",
            "title": "金额",
            "x-decorator": "FormItem",
            "x-component": "Input",
            "x-component-props": {
                "prefix": "￥"
            },
            "x-validator": [
              {
                "pattern": "^\\d+(\\.\\d{1,2})?$",
                "triggerType": 'onBlur',
                "message": '请输入正确的金额',
              },
            ],
            "x-decorator-props": {},
            "x-designable-id": "76a7wupfnbv",
            "x-index": 6,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        },
        "1yibuo5rvvi": {
            "type": "string",
            "title": "日期选择",
            "x-decorator": "FormItem",
            "x-component": "DatePicker",
            "x-validator": [],
            "x-component-props": {},
            "x-decorator-props": {},
            "x-designable-id": "1yibuo5rvvi",
            "x-index": 7,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        },
        "ynk0vuf8inp": {
            "type": "number",
            "title": "数字输入",
            "x-decorator": "FormItem",
            "x-component": "NumberPicker",
            "x-validator": [],
            "x-component-props": {},
            "x-decorator-props": {},
            "x-designable-id": "ynk0vuf8inp",
            "x-index": 8,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        },
        "q7per3et9jk": {
            "type": "boolean",
            "title": "开关",
            "x-decorator": "FormItem",
            "x-component": "Switch",
            "x-validator": [],
            "x-component-props": {},
            "x-decorator-props": {},
            "x-designable-id": "q7per3et9jk",
            "x-index": 9,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        },
        "r9b3yic7nuu": {
            "type": "string",
            "title": "时间选择器",
            "x-decorator": "FormItem",
            "x-component": "TimePicker",
            "x-validator": [],
            "x-component-props": {},
            "x-decorator-props": {},
            "x-designable-id": "r9b3yic7nuu",
            "x-index": 10,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        },
        "mg8q1ia48h5": {
            "type": "string[]",
            "title": "时间范围选择器",
            "x-decorator": "FormItem",
            "x-component": "TimePicker.RangePicker",
            "x-validator": [],
            "x-component-props": {},
            "x-decorator-props": {},
            "x-designable-id": "mg8q1ia48h5",
            "x-index": 11,
            "mobile-x-component-props": {},
            "pc-x-component-props": {},
            "x-reactions": ""
        }
    },
    "x-designable-id": "sy2segakbo8"
}

    const finallySchema = adaptSchemaForMobile(parseSchema)
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
