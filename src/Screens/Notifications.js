import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import Footer from "../ScreenSnippets/accounts/Footer";


class Notifications extends Component {

    state = {
        userinfo: [],
        recommendations:[]
      }
    
      componentDidMount() {
        axios.all([																		 
            axios.get("https://jsonplaceholder.typicode.com/users"),					 
            axios.get("https://jsonplaceholder.typicode.com/posts")
           ])
             .then(axios.spread((...responses) => {
                    const userinfo = responses[0].data;
                    const recommendations = responses[1].data;
                    this.setState({ userinfo });													 
                    this.setState({ recommendations });													 
            }))
             .catch(errors => {
                //react on errors.
              });
      }


    render() {

        return (
            <div className="parent" >
                <AccNavbar />
                <div className="container" style={{height:500}}>

                        <div className="intro-headline d-flex my-5">
                            <FontAwesomeIcon icon={faNewspaper} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                            <h2 className="font-weight-bold">Notifications</h2>
                        </div>
                        
                       <div class="search_results">
                           hello
                       </div>
                </div>
            <Footer />
        </div>   

        );
    }
}

export default Notifications;
