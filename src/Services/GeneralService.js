import { axiosInstance, authenticatedAxiosInstance } from "./axios";
import { GET_CATEGORIES_NAMES } from "../APIs/categories";

class GeneralService {

  //----------------------------- get categories names method --------------------------------------------
  getCategoriesNames = async () => {
      const response = await axiosInstance.get(GET_CATEGORIES_NAMES);
      return response;
  }
    
}

export default new GeneralService();