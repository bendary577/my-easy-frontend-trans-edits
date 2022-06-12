import { axiosInstance, authenticatedAxiosInstance } from "./axios";
import { REGISTER_API, LOGIN_API, LOGOUT_API } from "../APIs/authentication";


class AuthService {

  //----------------------------- register method --------------------------------------------
  register = async (data) => {
      const response = await axiosInstance.post(REGISTER_API,data);
      return response;
  }

  //----------------------------- login method --------------------------------------------
  login = async (dispatch, data) => {
     dispatch({ type: 'REQUEST_LOGIN' });
     try {
      const response = await axiosInstance.post(LOGIN_API,data);
        if (response.status === 200) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
            localStorage.setItem('currentUser', JSON.stringify(data));
            localStorage.setItem("token", response.data.token);
            return response;
        }
        dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
        return;
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', error: error });
    }
  }

  //----------------------------- logout method --------------------------------------------
  logout = async (dispatch) => {
    dispatch({ type: 'LOGOUT' });
    const response = await authenticatedAxiosInstance.post(LOGOUT_API);
    if (response.status === 200) {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
    }
    return response;
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