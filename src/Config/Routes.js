import NotFound from '../Screens/SiteSpecific/NotFound'
import Home from "../Screens/SiteSpecific/Home";
import SignUp from "../Screens/Authentication/SignUp";
import SignUpAs from "../Screens/Authentication/SignUpAs";
import ForgetPassword from '../Screens/Authentication/ForgetPassword';
import Account from '../Screens/Account/Account';
import EditProfile from "../Screens/Account/EditProfile";
import MakeComplaint from '../Screens/Complaint/MakeComplaint';
import BuyItem from '../Screens/Product/BuyItem';
import MyOrders from '../Screens/Order/MyOrders';
import OrderDetails from '../Screens/Order/OrderDetails';
import MyCart from '../Screens/Account/MyCart';
import CreateStore from '../Screens/Store/CreateStore';
import Uploaditem from '../Screens/Product/Uploaditem';
import MyInvoices from '../Screens/Invoice/MyInvoices';
import MakeInvoice from '../Screens/Invoice/MakeInvoice';
import ViewItemDetails from '../Screens/Product/ViewItemDetails';
import SellerProfile from '../Screens/Store/SellerProfile';
import Stores from '../Screens/Store/Stores';
import SellerStore from '../Screens/Store/SellerStore';
import SigninPage from '../Screens/Authentication/SigninPage';
import Search from '../Screens/SiteSpecific/Search';
import Notifications from '../Screens/Account/Notifications';
import ForgotPasswordConfirmation from '../Screens/Authentication/ForgotPasswordConfirmation';
import UpdatePassword from '../Screens/Authentication/UpdatePassword';
import StoreView from '../Screens/Store/StoreView';
import NewOrder from '../Screens/Order/NewOrder';
import Integartion from '../Screens/Payment/Integration';
import AdminWelcomeView from '../Screens/AdminDashboard/AdminWelcomeView';
import AdminCompaniesView from '../Screens/AdminDashboard/AdminCompaniesView';
import AdminIndividualSellerView from '../Screens/AdminDashboard/AdminIndividualSellersView';
import AdminCustomersView from '../Screens/AdminDashboard/AdminCustomersView';
import AdminTransactionsView from '../Screens/AdminDashboard/AdminTransactionsView';
import AdminRegisterationRequests from '../Screens/AdminDashboard/AdminRegisterationRequestsView';
import AdminUserApprovalFiles from '../Screens/AdminDashboard/AdminUserApprovalFiles';
import AdminManageUsersView from '../Screens/AdminDashboard/AdminManageUsersView';
import AdminChartsView from '../Screens/AdminDashboard/AdminChartsView';
import AdminComplaintsView from '../Screens/AdminDashboard/AdminComplaintsView';
import PayInvoice from '../Screens/Invoice/PayInvoice';
import TermsAndConditions from '../Screens/SiteSpecific/Terms&Conditions';
import AdminCheckComplaint from '../Screens/AdminDashboard/AdminCheckComplaint';
import WithdrawMoney from '../Screens/Payment/WithdrawMoney';

const routes =[
    /* ---------------------------- Home ---------------------------- */
    {
      path:'/',
      component: Home,
      isPrivate: false,
    },
    {
      path:'/terms_and_conditions',
      component: TermsAndConditions,
      isPrivate: false,
    },
    {
      path:'/*',
      component: NotFound,
      isPrivate: true,
    },
    {
       path:'/signin',
       component: SigninPage,
       isPrivate: false,
    },
    {
        path:'/signup',
        component: SignUp,
        isPrivate: false,
     },
    {
       path:'/registeras',
       component: SignUpAs,
       isPrivate: false,
    },
    {
       path:'/forgetpassword',
       component: ForgetPassword,
       isPrivate: false,
    },
    {
        path:'/confirm_code',
        component: ForgotPasswordConfirmation,
        isPrivate: false,
    },
    {
        path:'/update_password',
        component: UpdatePassword,
        isPrivate: false,
    },
    /* ---------------------------- Customer ---------------------------- */
    {
        path:'/pay_invoice',
        component: PayInvoice,
        isPrivate: true,
    },
    {
        path:'/profile',
        component: Account,
        isPrivate: true,
    },
    {
        path:'/edit_profile',
        component: EditProfile,
        isPrivate: true,
    },
    {
        path:'/make_complaint',
        component: MakeComplaint,
        isPrivate: true,
    },
    {
        path:'/myorders',
        component: MyOrders,
        isPrivate: true,
    },
    {
        path:'/orderDetails',
        component: OrderDetails,
        isPrivate: true,
    },
    {
        path:'/view_store',
        component: StoreView,
        isPrivate: true,
    },
    {
        path:'/viewitem',
        component: ViewItemDetails,
        isPrivate: true,
    },
        {
        path:'/sellerProfile',
        component: SellerProfile,
        isPrivate: true,
    },
        {
        path:'/stores',
        component: Stores,
        isPrivate: true,
    },
        {
        path:'/search',
        component: Search,
        isPrivate: true,
    },
        {
        path:'/notifications',
        component: Notifications,
        isPrivate: true,
    },
        {
        path:'/buyitem',
        component: BuyItem,
        isPrivate: true,
    },
        {
        path:'/mycart',
        component: MyCart,
        isPrivate: true,
    },
    /* ---------------------------- seller ---------------------------- */
    {
        path:'/mystore',
        component: SellerStore,
        isPrivate: true,
    },
    {
        path:'/createstore',
        component: CreateStore,
        isPrivate: true,
    },
    {
        path:'/make_invoice',
        component: MakeInvoice,
        isPrivate: true,
    },
    {
        path:'/myinvoices',
        component: MyInvoices,
        isPrivate: true,
    },
    {
        path:'/uploaditem',
        component: Uploaditem,
        isPrivate: true,
    },
    {
        path:'/mystore',
        component: SellerStore,
        isPrivate: true,
    },
    {
        path:'/integration',
        component: Integartion,
        isPrivate: true,
    },
    {
        path:'/withdraw_money',
        component: WithdrawMoney,
        isPrivate: true,
    },
    {
        path:'/new_order',
        component: NewOrder,
        isPrivate: true,
    },
    /* ---------------------------- admin ---------------------------- */
    {
        path:'/admin',
        component: AdminWelcomeView,
        isPrivate: true,
    },
    {
        path:'/admin/signup_requests',
        component: AdminRegisterationRequests,
        isPrivate: true,
    },
    {
        path:'/admin/complaints',
        component: AdminComplaintsView,
        isPrivate: true,
    },
    {
        path:'/admin/transactions',
        component: AdminTransactionsView,
        isPrivate: true,
    },
    {
        path:'/admin/manage_users',
        component: AdminManageUsersView,
        isPrivate: true,
    },
    {
        path:'/admin/check_complaint',
        component: AdminCheckComplaint,
        isPrivate: true,
    },
    {
        path:'/admin/customers',
        component: AdminCustomersView,
        isPrivate: true,
    },
    {
        path:'/admin/companies',
        component: AdminCompaniesView,
        isPrivate: true,
    },
    {
        path:'/admin/sellers',
        component: AdminIndividualSellerView,
        isPrivate: true,
    },
    {
        path:'/admin/charts',
        component: AdminChartsView,
        isPrivate: true,
    },
    {
        path:'/admin/approval_files',
        component: AdminUserApprovalFiles,
        isPrivate: true,
    },
  ]
   
  export default routes