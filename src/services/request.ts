import axios from 'axios';

var request = axios.create({
  baseURL: 'https://mock.apifox.cn/m1/1786731-0-default', //基准地址
  timeout: 10 * 1000,
});

axios.defaults.headers.common['Authorization'] = localStorage.getItem(
  'ID07q8avF7cFY3ir1VMGQ2F9TQEoJkLp',
);
//拦截请求
request.interceptors.request.use((config) => {
  return config;
});
//拦截响应
request.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    //对响应的错误做点什么
    return Promise.reject(error);
  },
);

export default request;
