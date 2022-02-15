import { axiosInstance, authenticatedAxiosInstance } from "./axios";
import { REGISTER_API, LOGIN_API, LOGOUT_API } from "../APIs/authentication";

class AuthService {

  //----------------------------- register method --------------------------------------------
  register = async (data) => {
      const response = await axiosInstance.post(REGISTER_API,data);
      if (response.status === 200) {
        return response.data;
      }
  }

  //----------------------------- login method --------------------------------------------
  login = async (data) => {
      const response = await axiosInstance.post(LOGIN_API,data);
      if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          return response.data;
      }else{

      }
  }

  //----------------------------- logout method --------------------------------------------
  logout = async () => {
    const response = await authenticatedAxiosInstance.post(LOGOUT_API);
    console.log(LOGOUT_API)
    console.log("bendaaaaaaaaaaaaaaaary")
    if (response.status === 200) {
        console.log("success")
        localStorage.removeItem("token");
        return response.status;
    }else if (response.status == 401){
      console.log("not authenticated")
      return response.status;
    }
  }

  /*
     //----------------------------- forgot password method --------------------------------------------
    async forgotPassword(email) {
      const response = await axiosInstance
      .post(API_URL + "forgot_passowrd");
      if (response.data.status === 200) {
          //localStorage.removeItem("user");
      }
    }

    //----------------------------- confirm code method --------------------------------------------
    async confirmCode(confirmation_code) {
      const response = await axiosInstance
      .post(API_URL + "confirm_code");
      if (response.data.status === 200) {
          //localStorage.removeItem("user");
      }
    }

  //----------------------------- confirm code method --------------------------------------------
  async updatePassword(password, condfirmPassword) {
    const response = await axiosInstance
    .post(API_URL + "update_password", {
      password,
      condfirmPassword
    });
    if (response.data.status === 200) {
        //localStorage.removeItem("user");
    }
  } 
  */ 
    
}

export default new AuthService();