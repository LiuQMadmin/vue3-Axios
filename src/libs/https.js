import axios from "axios";
//对token的统一处理
axios.interceptors.request.use(
    config => {
        config.baseURL = process.env.VUE_APP_API;
        config.timeout = 5000;
        // axios请求的时候设置token,aixos拦截时获取sessionStorage中的token
        const userToken = window.sessionStorage.getItem("userToken");
        if (userToken) {
            config.headers = { "Tcsl-Loongboss-Token": userToken };
        }
      return config;
    },
    error => {
      alert("传参错误");
      return Promise.reject(error);
    }
  );
const Axios = (config) => {
    axios(config).then((res) => {
            // res.headers["tcsl-loongboss-token"] && 
            window.sessionStorage.setItem("userToken", 'result.headers["tcsl-loongboss-token"]');
            config.success ? config.success(res) : alert("请传入成功回调函数");
        },(err) => {
            config.fail ? config.fail(err) : console.log("接口调用失败");
        }
    )
}
export default Axios;