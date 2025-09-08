import axios from 'axios';

axios.defaults.baseURL = '/'; // 配置axios请求的地址
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(res => {
  res.headers['token'] =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoi5rWp5Lya5rW3IiwiaWF0IjoxNzUxOTc5MTkyLCJleHAiOjE3NTIwNjU1OTJ9.3B1-iJ05HC29np62yF2eRNIBlMOjaNvROl4I4zDIsXI';
});
// 配置响应拦截器
axios.interceptors.response.use(
  res => {
    return Promise.resolve(res.data); // 这里直接返回data, 即接口返回的所有数据
  },
  error => {
    // 判断是否登录失效，按照实际项目的接口返回状态来判断
    if (error.toString().includes('776')) {
      // window.location.href = window.location.origin + "/#/login";
    }
    return Promise.reject(error);
  }
);

export default axios;
