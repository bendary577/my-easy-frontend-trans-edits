import React, {useState} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../Services/AuthService";
import  { withRouter  } from 'react-router-dom';
import { useAuthState, useAuthDispatch } from '../../Context'

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        This field is required!
      </div>
    );
  }
}

const SigninPage = (props) => {

  const dispatch = useAuthDispatch()
  const [usernameOrEmail, setUsernameOrEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const onChangeUsername = (e) => {
    setUsernameOrEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async (e) => {

    e.preventDefault();
    setMessage('');
    setLoading(false);

    this.form.validateAll();

    //if no errors
    if (this.checkBtn.context._errors.length === 0) {

      let data = {
        email : this.state.username, 
        password : this.state.password,
      }

      setLoading(true);
      let response = await  AuthService.login(dispatch, data);
      if(response.status === 200){
        props.history.push("/profile");
        window.location.reload();
      }else{
        setMessage(response.data.message);
      }
      setLoading(false);
  }
}

    return (
      <div className="">
        <div className="auth-card card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form 
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={usernameOrEmail}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="form-group">
                <div className="text-center">
                    <h6>forgot your password ? <a href="/forgetpassword" className="">reset</a> </h6>
                </div>
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            <div className="form-group">
              <button className="btn btn-success btn-block">
                <span>don't have an account ? <a href="/registeras" className="text-white">Signup</a></span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}

            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
            
          </Form>
        </div>
      </div>
    );
}

export default withRouter(SigninPage);  