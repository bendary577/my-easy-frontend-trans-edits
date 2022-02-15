import { authenticatedAxiosInstance } from "./axios";
import { GET_USER_INFO } from "../APIs/user";

class UserService {

    //----------------------------- register method --------------------------------------------
    getUserInfo = async () => {
        const response = await authenticatedAxiosInstance.get(GET_USER_INFO);
        return response;
    }
    
}

export default new UserService();
