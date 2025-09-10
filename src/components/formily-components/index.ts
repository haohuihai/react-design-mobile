import { FormilyInput } from './Input';
import { FormilyFormItem } from './Form-Item';
import { FormilyCheckboxGroup } from './Checkbox';
import { FormilyRadioGroup } from './Radio';
import { FormilyDatePicker } from './DatePicker';
import { FormilyTextArea } from './TextArea';
import { FormilyNumberInput } from './Number';
import { FormilyMoneyInput } from './Money';
import { FormilySelectSingle } from './SelectSingle';
import { FormilySelectMultiple } from './SelectMultiple';
import { FormilyTimePicker } from './TimePicker';
import { FormilyDateRangePicker } from './DateRangePicker';
import { FormilyTimeRangePicker } from './TimeRangePicker';
import { FormilyLocationPicker } from './LocationPicker';
import { FormilyUpload } from './Upload';
import { FormilyImageUpload } from './ImageUpload';
import { FormilySignature } from './Signature';
import { FormilyRate } from './Rate';
import { FormilySwitch } from './Switch';

// 单行文本  多行文本  金额   数字  单选  多选    下拉单选  下拉多选   定位   日期 日期范围   时间  时间范围      附件  图片   签名   评分   开关
import {
  CascadePicker,
  CheckList,
  FormGrid,
  List,
  Reset,
  Selector,
  Stepper,
  Switch,
  FormLayout,
  FormButtonGroup,
  Submit,
} from '@formily/antd-mobile';
export default {
  FormItem: FormilyFormItem,
  FormGrid,
  FormLayout,

  // Input 系列
  Input: FormilyInput,
  TextArea: FormilyTextArea,
  NumberInput: FormilyNumberInput,
  MoneyInput: FormilyMoneyInput,

  // 选择器
  Checkbox: {
    Group: FormilyCheckboxGroup,
  },
  Radio: {
    Group: FormilyRadioGroup,
  },
  Select: {
    Single: FormilySelectSingle,
    Multiple: FormilySelectMultiple,
  },

  // 日期时间
  DatePicker: FormilyDatePicker,
  DateRangePicker: FormilyDateRangePicker,

  TimePicker: FormilyTimePicker,
  TimeRangePicker: FormilyTimeRangePicker,

  // 业务控件
  LocationPicker: FormilyLocationPicker,
  CascadePicker,
  Upload: FormilyUpload,
  ImageUpload: FormilyImageUpload,
  Signature: FormilySignature,

  // 其他
  Switch: FormilySwitch,
  Rate: FormilyRate,

  // 按钮
  Reset,
  Submit,
};
