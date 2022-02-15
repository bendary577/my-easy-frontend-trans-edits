import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import Footer from "../ScreenSnippets/accounts/Footer";
import person from '../../public/images/person_2.jpg';

class Search extends Component {

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

        const imageStyle = {
            width : 200,
            height : 200
        }

        return (
            <div className="parent" >

                <AccNavbar />

                <div className="container p-5">

                        <div className="intro-headline d-flex my-5">
                            <FontAwesomeIcon icon={faSearch} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                            <h2 className="font-weight-bold">Search Results</h2>
                        </div>

                       <div className="search_results">
                           <div className="result">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img className="" src={person} alt="" style={imageStyle} />
                                        </div>
                                        <div className="col-md-8 mt-4">
                                            <h2>Name is name</h2>
                                            <p>my name is pla pla pla </p>
                                            <a href="" className="btn btn-success">take action</a>
                                        </div>
                                    </div>
                                </div>
                           </div>
                           <hr></hr>
                           <div className="result">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img className="" src={person} alt="" style={imageStyle} />
                                        </div>
                                        <div className="col-md-8 mt-4">
                                            <h2>Name is name</h2>
                                            <p>my name is pla pla pla </p>
                                            <a href="" className="btn btn-success">take action</a>
                                        </div>
                                    </div>
                                </div>
                           </div>
                           <hr></hr>
                           <div className="result">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img className="" src={person} alt="" style={imageStyle} />
                                        </div>
                                        <div className="col-md-8 mt-4">
                                            <h2>Name is name</h2>
                                            <p>my name is pla pla pla </p>
                                            <a href="" className="btn btn-success">take action</a>
                                        </div>
                                    </div>
                                </div>
                           </div>
                           
                       </div>
                </div>
            <Footer />
        </div>   

        );
    }
}

export default Search;
