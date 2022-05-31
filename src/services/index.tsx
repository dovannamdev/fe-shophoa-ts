import { API } from "./endPoint";
import HttpClient from "./service";

export class ShopHoaAPI extends HttpClient {
  constructor() {
    super(process.env.REACT_APP_DOMAIN_API_SERVER);
  }

  //METHOD GET
  public getAllRole = async () => {
    const { data } = await this.instance.get(API.GET_DECENTRALIZE);
    console.log("data", data);
    return data;
  };
  //END METHOD GET

  //METHOD POST

  //END METHOD POST
}
