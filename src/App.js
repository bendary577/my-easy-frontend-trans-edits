import React, { useEffect, useState  } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Screens/Home";
import SignUp from "./Screens/SignUp";
import SignUpAs from "./Screens/SignUpAs";
import ForgetPassword from './Screens/ForgetPassword';
import Account from './Screens/Account';
import EditProfile from "./Screens/EditProfile";
import MakeComplaint from './Screens/MakeComplaint';
import BuyItem from './Screens/BuyItem';
import MyOrders from './Screens/MyOrders';
import OrderDetails from './Screens/OrderDetails';
import MyCart from './Screens/MyCart';
import CreateStore from './Screens/CreateStore';
import Uploaditem from './Screens/Uploaditem';
import MyInvoices from './Screens/MyInvoices';
import MakeInvoice from './Screens/MakeInvoice';
import ViewItemDetails from './Screens/ViewItemDetails';
import SellerProfile from './Screens/SellerProfile';
import Stores from './Screens/Stores';
import SellerStore from './Screens/SellerStore';
import SigninPage from './Screens/SigninPage';
import Search from './Screens/Search';
import Notifications from './Screens/Notifications';
import ForgotPasswordConfirmation from './Screens/ForgotPasswordConfirmation';
import UpdatePassword from './Screens/UpdatePassword';
import StoreView from './Screens/StoreView';
import { useTranslation } from 'react-i18next';
import NewOrder from './Screens/newOrder';
import { AuthenticationProvider } from './Context/AuthenticationContext';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Integartion from './Screens/Integration';
import AdminWelcomeView from './Screens/AdminWelcomeView';
import AdminCompaniesView from './Screens/AdminCompaniesView';
import AdminIndividualSellerView from './Screens/AdminIndividualSellersView';
import AdminCustomersView from './Screens/AdminCustomersView';
import AdminTransactionsView from './Screens/AdminTransactionsView';
import AdminRegisterationRequests from './Screens/AdminRegisterationRequestsView';
import AdminUserApprovalFiles from './Screens/AdminUserApprovalFiles';
import AdminManageUsersView from './Screens/AdminManageUsersView';
import AdminChartsView from './Screens/AdminChartsView';
import AdminComplaintsView from './Screens/AdminComplaintsView';
import PayInvoice from './Screens/PayInvoice';
import TermsAndConditions from './Screens/Terms&Conditions';
import AdminCheckComplaint from './Screens/AdminCheckComplaint';
import WithdrawMoney from './Screens/WithdrawMoney';
import UserService from './Services/UserService';

const App = () => {

    const {i18n} = useTranslation();
    const [showAdminRoutes, setShowAdminRoutes] = useState(false);
    const [showCustomerRoutes, setShowCustomerRoutes] = useState(false);
    const [showSellerRoutes, setShowSellerRoutes] = useState(false);
    const [showCompanyRoutes, setShowCompanyRoutes] = useState(false);
    const [userAuthenticated, setUserAuthenticated] = useState(false);

  

        return (
            <AuthenticationProvider >
                <BrowserRouter>
                                <Switch>
                                     <Route exact path={["/", "/home"]}>
                                        <Home />
                                    </Route>

                                    <Route exact path="/terms_and_conditions">
                                        <TermsAndConditions />
                                    </Route>

                                    <Route exact path="/signin">
                                        <SigninPage />
                                    </Route>

                                    <Route exact path="/signup">
                                        <SignUp />
                                    </Route>

                                    <Route exact path="/registeras">
                                        <SignUpAs />
                                    </Route>

                                    <Route exact path="/forgetpassword">
                                        <ForgetPassword />
                                    </Route>

                                    <Route exact path="/confirm_code">
                                        <ForgotPasswordConfirmation />
                                    </Route>

                                    <Route exact path="/update_password">
                                        <UpdatePassword />
                                    </Route>
                                    
                                    <Route exact path="/pay_invoice">
                                        <PayInvoice />
                                    </Route>

                                    <Route exact path={["/", "/profile"]}>
                                        <Account />
                                    </Route>

                                    <Route exact path="/edit_profile">
                                        <EditProfile />
                                    </Route>

                                    <Route exact path="/make_complaint">
                                        <MakeComplaint />
                                    </Route>

                                    <Route exact path="/myorders">
                                        <MyOrders />
                                    </Route>

                                    <Route exact path="/orderDetails">
                                        <OrderDetails />
                                    </Route>

                                    <Route exact path="/view_store">
                                        <StoreView />
                                    </Route>

                                    <Route exact path="/viewitem">
                                        <ViewItemDetails />
                                    </Route>

                                    <Route exact path="/sellerProfile">
                                        <SellerProfile />
                                    </Route>

                                    <Route exact path="/stores">
                                        <Stores />
                                    </Route>

                                    <Route exact path="/search">
                                        <Search />
                                    </Route>

                                    <Route exact path="/notifications">
                                        <Notifications />
                                    </Route>

                                    <Route exact path="/buyitem">
                                        <BuyItem />
                                    </Route>

                                    <Route exact path="/mycart">
                                        <MyCart />
                                    </Route>

                                <Route exact path="/mystore">
                                    <SellerStore />
                                </Route>

                                <Route exact path="/createstore">
                                    <CreateStore />
                                </Route>

                                <Route exact path="/make_invoice">
                                    <MakeInvoice />
                                </Route>

                                <Route exact path="/myinvoices">
                                    <MyInvoices />
                                </Route>

                                <Route exact path="/uploaditem">
                                    <Uploaditem />
                                </Route>

                                <Route exact path="/mystore">
                                    
                                    <SellerStore />
                                </Route>

                                <Route exact path="/integration">
                                    <Integartion />
                                </Route>

                                <Route exact path="/withdraw_money">
                                    <WithdrawMoney />
                                </Route>

                                <Route exact path="/new_order">
                                    <NewOrder />
                                </Route>

                                    <Route exact path="/admin">
                                        <AdminWelcomeView/>
                                    </Route>

                                    <Route exact path="/admin/signup_requests">
                                        <AdminRegisterationRequests/>
                                    </Route>

                                    <Route exact path="/admin/complaints">
                                        <AdminComplaintsView/>
                                    </Route>

                                    <Route exact path="/admin/transactions">
                                        <AdminTransactionsView/>
                                    </Route>

                                    <Route exact path="/admin/manage_users">
                                        <AdminManageUsersView/>
                                    </Route>

                                    <Route exact path="/admin/check_complaint">
                                        <AdminCheckComplaint/>
                                    </Route>

                                    <Route exact path="/admin/customers">
                                        <AdminCustomersView/>
                                    </Route>

                                    <Route exact path="/admin/companies">
                                        <AdminCompaniesView/>
                                    </Route>

                                    <Route exact path="/admin/sellers">
                                        <AdminIndividualSellerView/>
                                    </Route>

                                    <Route exact path="/admin/charts">
                                        <AdminChartsView/>
                                    </Route>

                                    <Route exact path="/admin/approval_files">
                                        <AdminUserApprovalFiles/>
                                    </Route>
                            </Switch>
                </BrowserRouter>
            </AuthenticationProvider>
                            
        );
      }

export default App;