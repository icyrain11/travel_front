import Request from "./request";

//请求示例对象
const APP_API_URL = import.meta.env.VITE_API_URL;
const request = new Request({
  baseURL: APP_API_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => {
      console.log("实例请求拦截器");
      return config;
    },
    // 响应拦截器
    responseInterceptors: (result) => {
      console.log("实例响应拦截器");
      return result;
    },
  },
});

export default request;
