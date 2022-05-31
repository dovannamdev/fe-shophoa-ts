import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import cookie from "js-cookie";
import queryString from "qs";
export default class HttpClient {
  protected readonly instance: AxiosInstance;

  constructor(baseURL?: string) {
    this.instance = axios.create({
      baseURL,
      headers: {
        "content-type": "application/json",
      },
      timeout: 25000,
      paramsSerializer: (params) => queryString.stringify(params),
    });
    this.requestInterceptor();
    this.responseInterceptor();
  }

  private requestInterceptor = () => {
    this.instance.interceptors.request.use(
      async (config: AxiosRequestConfig) => {
        const token = cookie.get("token");
        if (token) {
          (config.headers as any).Authorization = `Bearer ${token}`;
        } else if (this.instance && this.instance.defaults.headers) {
          console.log(
            "this.instance.defaults.headers",
            this.instance.defaults.headers
          );
        }
        return config;
      }
    );
  };
  private responseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this.handleError
    );
  };
  private _handleResponse = ({ data, config }: AxiosResponse<any>): any => {
    const res = data.result;
    const resHeaders = config.url;
    if (!!res.error) {
      const error = {
        headers: resHeaders,
        message: res.message,
        isError: true,
        data: res.data,
      };

      return Promise.reject(error);
    }
    return { data };
  };
  private handleError = (error: AxiosError) => {
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      console.error("Headers:", error.response.headers);
    } else {
      console.error("Error Message:", error.message);
    }
    return Promise.reject(error.response || error.message);
  };
}
