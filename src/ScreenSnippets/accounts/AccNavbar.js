import React, { Component } from "react";
import "../../../public/css/accnavbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Pusher from 'pusher-js';
import logo from '../../../public/images/Home/myeasy-logo.png'
import LanguageSwitcher from "../../Components/Buttons/LanguageSwitcher";
import AuthService from "../../Services/AuthService";
import  { withRouter  } from 'react-router-dom'
import { withTranslation } from "react-i18next";

class CustomerAccNavBar extends Component {

  state = {
    new_notification_message : "",
    notifications_number: 0,
  };

  componentDidMount() {

    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;
      var pusher = new Pusher("aa38bb9a07c03b75f95d", {
        cluster: "us2",
        encrypted: true,
      });
      
      var channel = pusher.subscribe("new_order_notification");
      channel.bind("pusher:subscription_succeeded",  (data) => {
        /*
        alert(JSON.stringify(data));
        this.setState({
            new_notification_message : data.message
        });
        */
      });
  }

  clearNotifications = (e)=> {
    e.preventDefault();
    this.setState({
        new_notification_message : "",
        notifications_number : 0
    })
  }

  logout = async () => {
    let status = await AuthService.logout();
    if(status === 200){
      this.props.history.push("/signin");
      window.location.reload();
    }
  }

  render() {
    const {t}=this.props;
    const logoStyle = {
      width: 90,
      height: 90,
      marginTop : 5
    };

    return (

      <nav class="navbar navbar-icon-top navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/profile">{t(`home.accnavbar.profile`)}</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <a href="/search" class="btn btn-outline-success my-2 my-sm-0" type="submit">{t(`home.accnavbar.search`)}</a>
          </form>
          <ul class="navbar-nav ml-auto mr-5">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <LanguageSwitcher />  
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-bell">
                  <span class="badge badge-danger">1</span>
                </i>
                {t(`home.accnavbar.notifications`)}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#"><strong>{t(`home.accnavbar.notifications`)}</strong></a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item alert alert-success" href="/newOrder">{t(`home.accnavbar.customer_order_product`)}</a>
                <a class="dropdown-item" href="#">{t(`home.accnavbar.action`)}</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-user">
                  <span class="badge badge-primary">11</span>
                </i>
                {t(`home.accnavbar.dropdown`)}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/edit_profile">{t(`home.accnavbar.edit`)}</a>
                <a class="dropdown-item" href="#"></a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="javascript:void(0);" onClick={this.logout}>{t(`home.accnavbar.logout`)}</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>


    );
  }
}

export default withTranslation()(withRouter(CustomerAccNavBar));
