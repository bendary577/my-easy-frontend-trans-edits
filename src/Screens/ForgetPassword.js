import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../Services/AuthService";
import forgotPassword from '../../public/images/Authentication/forgotpassword.png';


const imageStyle = {
    width : 100,
    height : 100
}

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class ForgetPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      loading: false,
      message: ""
    };
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  handleForgotPassword = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.forgotPassword(this.state.email).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="auth-card  card card-container">

          <div className="my-2">
              <div className="container">
                  <div className="row">
                    <div className="col-md-9 d-flex align-items-center">
                        <h2>Forgot Your Password ?</h2>    
                    </div>
                    <div className="col-md-3">
                        <img src={forgotPassword} style={imageStyle} className="" alt="forgot password" />
                    </div>
                  </div> 
                  <p>Confirm your mail and we will send the instructions</p> 
              </div>
          </div>

          <Form
            onSubmit={this.handleForgotPassword}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required]}
              />
              <p>We'll never share your email with anyone else.</p>
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span><a href="/confirm_code" className="text-white">Send Confirmation Code</a></span>
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
}

