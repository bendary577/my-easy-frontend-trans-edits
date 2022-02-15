import { authenticatedAxiosInstance } from "./axios";
import { GET_My_ORDERS } from "../APIs/order";

class SellerService {

  //----------------------------- register method --------------------------------------------
  getMyOrders = async () => {
    const response = await authenticatedAxiosInstance.get(GET_My_ORDERS);
    return response;
  }


}

export default new SellerService();