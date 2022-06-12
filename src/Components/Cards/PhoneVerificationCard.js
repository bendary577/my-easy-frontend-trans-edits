import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../Services/AuthService";
import { withTranslation } from 'react-i18next';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        {/* {t(`home.PhoneVerificationCard.req_field`)} */}
        this field is required required
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
         {/* {t(`home.PhoneVerificationCard.pass_alert`)} */}
         error in verification password
      </div>
    );
  }
};

 class PhoneVerificationCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      confirm_password: "",
      loading: false,
      message: ""
    };
}
  

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  onChangeConfirmPassword = (e) => {
    this.setState({
      confirm_password: e.target.value
    });
  }

  handleUpdatePassword = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.updatePassword(this.state.password, this.state.confirm_password).then(
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
    const { t } = this.props;
    return (
      <div class="background">
        <div className="col-md-12 ">
          <div className=" auth-card  card card-container">

            <div className="my-2">
                <h2>{t(`home.PhoneVerificationCard.verify`)}</h2>
            </div>

            <Form
              onSubmit={this.handleUpdatePassword}
              ref={c => {
                this.form = c;
              }}
            >
              <div className="form-group">
                <label htmlFor="password">{t(`home.PhoneVerificationCard.phone_num`)}</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirm_password">{t(`home.PhoneVerificationCard.confirm_phone`)}</label>
                <Input
                  type="password"
                  className="form-control"
                  name="confirm_password"
                  value={this.state.confirm_password}
                  onChange={this.onChangeConfirmPassword}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <button
                  className="btn btn-success btn-block"
                  disabled={this.state.loading}
                  onClick={()=>{this.props.setCurrentStep(1)}}
                >
                  {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>{t(`home.PhoneVerificationCard.next`)}</span>
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
      </div>
    );
  }
}

export default withTranslation()(PhoneVerificationCard);