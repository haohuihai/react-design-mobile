import { FormilyInput } from './Input';
import { FormilyFormItem } from './Form-Item';
import { FormilyCheckboxGroup } from './Checkbox';
import { FormilyRadioGroup } from './Radio';
import { FormilyDatePicker } from './DatePicker';
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
  Input: FormilyInput,
  FormItem: FormilyFormItem,
  CascadePicker,
  CheckList,
  Checkbox: {
    Group: FormilyCheckboxGroup,
  },
  Radio: {
    Group: FormilyRadioGroup,
  },
  DatePicker: FormilyDatePicker,
  FormGrid,
  List,
  Reset,
  Selector,
  Stepper,
  Switch,
  FormLayout,
  FormButtonGroup,
  Submit,
};
