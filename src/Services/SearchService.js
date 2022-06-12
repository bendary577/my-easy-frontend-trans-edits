import { axiosInstance, authenticatedAxiosInstance } from "./axios";
import { SEARCH_API } from "../APIs/search";

class SearchService {

  //----------------------------- home search method --------------------------------------------
  homeSearch = async () => {
      const response = await axiosInstance.get(SEARCH_API);
      return response;
  }
    
}

export default new SearchService();