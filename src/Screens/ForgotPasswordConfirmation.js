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
      confirmation_code : "",
      loading: false,
      message: ""
    };
  }

  onChangeConfirmationCode = (e) => {
    this.setState({
      confirmation_code: e.target.value
    });
  }

  handleConfirmCode = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.confirmCode(this.state.confirmation_code).then(
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
              <h2>Confirm Code</h2>
              <div className="alert alert-success">
                  we have sent a confirmation code to your email
              </div>
              <p>please write the code we sent to your email</p>
          </div>

          <Form
            onSubmit={this.handleConfirmCode}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="confirm_code">Confirmation Code</label>
              <Input
                type="text"
                className="form-control"
                name="confirm_code"
                value={this.state.confirmation_code}
                onChange={this.onChangeConfirmationCode}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span><a href="/update_password" className="text-white">Check Code</a></span>
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

