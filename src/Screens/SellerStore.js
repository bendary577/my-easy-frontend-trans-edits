import React, { Component } from "react";
import axios from "axios";
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import StoreItemsList from "../ScreenSnippets/store/StoreItemsList";
import noItems from "../../public/icons/stores/noitems.png";
import Pagination from "react-js-pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStore } from "@fortawesome/free-solid-svg-icons";
import Footer from "../ScreenSnippets/accounts/Footer";
import StoreSideNavbar from "../ScreenSnippets/store/StoreSideNavbar";
import AccSideNavbar from "../ScreenSnippets/accounts/AccSideNavbar";

class SellerStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      activePage: 1,
    };
  }

  handlePageChange=(pageNumber)=> {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  componentDidMount = () => {
    axios
      .get(`http://127.0.0.1:8000/api/products/?page=${this.state.activePage}`)
      .then((res) => {
        this.setState({ data: res.data });
        console.log(this.state.data);
      });
  };

  render() {
    const imageStyle = {
      width: 400,
      height: 400,
    };
    return (
      <div>
        <div className="d-flex" id="wrapper">
          <AccSideNavbar />
          {/* ------------------------------- page content ------------------------------------- */}
          <div className="page-content-wrapper w-100">
              <AccNavbar />
              <div className="container-fluid" >
                {/**---------------------------- header ------------------------------------ */}
                <div className="row">
                    <div className="container intro-headline d-flex my-5">
                        <FontAwesomeIcon icon={faStore} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                        <h2 className="font-weight-bold">My Store</h2>
                    </div>
                    <div class="container">
                      {
                        this.state.data === null ? 
                          <div className="text-center my-5">
                            <img className="" src={noItems} style={imageStyle} alt="" />
                            <h3>your store is empty!</h3>
                            <a href="/uploaditem" className="btn btn-lg btn-warning">
                              Upload an item
                            </a>
                          </div>
                        :
                        <div className="">
                          <StoreItemsList items={this.state.data.data} />
                          <div className="pagination my-5 d-flex justify-content-center text-center">
                            <Pagination
                              activePage={this.state.activePage}
                              itemsCountPerPage={this.state.data.per_page}
                              totalItemsCount={this.state.data.total}
                              pageRangeDisplayed={8}
                              itemClass="page-item"
                              linkClass="page-link"
                              firstPageText="first"
                              lastPageText="last"
                              onChange={(pageNumber) => {
                                this.handlePageChange(pageNumber);
                              }}
                            />
                          </div>
                        </div>
                      }
                    </div>
                </div>
                {/**---------------------------- products ------------------------------------ */}       
              </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SellerStore;
