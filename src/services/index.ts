import axios from '@/utils/axios';
const api = {
  getFormDetail: '/api/manage/form/design/',
  addFormData: '/forms/',
};
export function getFormDesignSchema(id: string) {
  return axios(api.getFormDetail + id, {
    method: 'get',
    params: {},
  });
}

export function addFormData(body: any) {
  return axios(api.addFormData + body.id + '/submit', {
    method: 'post',
    params: {},
    data: body,
  });
}
