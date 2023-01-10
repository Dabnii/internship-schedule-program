import axios from "axios";

// '../api/utils'의 axiosInstance 함수를 참고하여 작성
// Schedule 화면에서 통신에 사용하는 axios 함수
const api = async ({ ...params }) => {
  const {
    needAuth = true,
    headers = {},
    data,
    fncResolve = r => r,
    ...config
  } = params;

  const API_URL = (() => {
    if (typeof window.env === "undefined") {
      return process.env.API_URL;
    }
    return window.env.API_URL;
  })();
  const authToken = needAuth ? localStorage.getItem("auth_token") : null;
  const language = "en";

  const instance = await axios({
    baseURL: `${API_URL}`,
    timeout: 180000,
    headers: Object.assign(
      {
        Authorization: `${authToken}`,
        "client-server": "true",
        "Accept-Language": language,
      },
      headers
    ),
    data,
    ...config,
  })
    .then(fncResolve)
    .catch(error => error.response);
  return instance;
};

export default api;
