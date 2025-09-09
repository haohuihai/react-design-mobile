import { useEffect, useState } from 'react';
// @ts-ignore
import '@/assets/style/form.less';
import Components from '@/components/formily-components';
import { useParams } from 'umi';
import './index.less';
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
    getFormDesignSchema(params.id).then(res => {
      console.log('res', res);
      if (res.code === 200) {
        const parseSchema = JSON.parse(res.data.schema);
        console.log('parseSchema', parseSchema);

        setScheam(parseSchema);
      }
    });
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
