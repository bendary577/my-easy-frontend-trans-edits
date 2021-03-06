import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';

const resources = {
  en: {
    translation: {
      home : {
        navbar : {
          services: "services",
          aboutus: "about us",
          offers: "offers",
          contacts: "contacts",
          privacy_policy: "privacy policy",
          terms_of_service: "terms of service",
          login : "login",
        },
        welcome : {
          welcome: "Welcome to MyEasy, your number one payment solution for your business and day-to-day operations, start now and get your money flow !",
          start_now: "Start Now!",
        },
        services : {
          services_we_offer : "SERVICES WE OFFER",
          services_description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          grwoing_business : "Growing Business",
          grwoing_business_description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
          save_time : "Save Time",
          save_time_description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
          customer_support : "Customer Support",
          customer_support_description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
          make_invoice : "Make Invoice",
          make_invoice_description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
          make_your_market : "Create Your Market",
          make_your_market_description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
          make_shopping : "Make Shopping",
          make_shopping_description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
        },
        about : {
          about_my_easy : "ABOUT MY EASY",
          about_my_easy_description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          first_section_title : "We Believe",
          first_section_description_1 : "Trusted comes with tons of custom widgets, color options, font control and much more.",
          first_section_description_2 : "We aim to eliminate the task of dividing your project between different agency, corporate and business template. We are a company that offers services for our clients to solve problems and planing strategies for humanity all over the world.",
          second_section_title : "We Believe",
          second_section_description_1 : "Trusted comes with tons of custom widgets, color options, font control and much more.",
          second_section_description_2 : "We aim to eliminate the task of dividing your project between different agency, corporate and business template. We are a company that offers services for our clients to solve problems and planing strategies for humanity all over the world.",
          read_more : "READ MORE",
        },
        panel : {
          title : "We Can Make Youe Rich",
          description : "you can use your moeny to busniss it in useful work",
          action : "start"
        },
        offers : {
          what_we_offer : "What We Can Offer",
          what_we_offer_description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          first_section_title : "We Believe",
          first_section_description_1 : "Trusted comes with tons of custom widgets, color options, font control and much more.",
          first_section_description_2 : "We aim to eliminate the task of dividing your project between different agency, corporate and business template. We are a company that offers services for our clients to solve problems and planing strategies for humanity all over the world.",
          second_section_title : "We Believe",
          second_section_description_1 : "Trusted comes with tons of custom widgets, color options, font control and much more.",
          second_section_description_2 : "We aim to eliminate the task of dividing your project between different agency, corporate and business template. We are a company that offers services for our clients to solve problems and planing strategies for humanity all over the world.",
        },
         contactus : {
          contact:"contact us",
          name:"name",
          email:"email",
          subject:"subject",
          content:"content",
          send:"send",
          },
          acccustomerlinks:{
            wallet:"wallet",
            ordernum:"orders number",
            myprofile:"my profile",
            mycart:"my cart",
            myorders:"my orders",
            overview:"overview",
            help:"Help",
            privacy:"privacy and policy",
            terms:"Terms & conditions"
          },
          accnavbar:{
            profile:"profile",
            search:"search",
            notfications:"Notfications ",
            customer_order_product:"a customer orderd a product",
            action:"take another action",
            dropdown:"dropdown",
            edit:"edit profile",
            logout:"log out",
          },
          AccountInfoSection:{
            welcome:"welcome to your account",
          },
          AccSellerLinks:{
            wallet:"wallet",
            dollar:"change to dollar",
            withdraw:"withdraw money",
            check:"sorry, can't withdraw money yet",
            order_num:"orders number",
            profile:"my profile",
            store:"my store",
            orders:"my orders",
            invoices_1:"Invoices",
            invoices_2:"My Invoices",
            invoices_3:"Create Invoice",
            complaints_0:"Complaints ",
            complaints_1:"my Complaints ",
            complaints_2:"Make Complaint",
            integration:"Integration Settings",
            view:"Overview",
            help:"Help",
            priv:"Privacy Policy",
            terms:"Terms & conditions",
          },
          AccSideNavbar:{
            dashboard:"Dashboard",
          },
          CategoriesNavbar:{
            electronic:"electronic producrs",
            page1_1:"page1-1",
            page1_1:"page1-2",
            page1_1:"page1-3",
            food:"food products",
            items:"items",
            clothes:"clothes",
            furniture:"furniture",
            books:"books",
            mobiles:"Mobiles ",
            kitchen:"kitchen products",
            games:"games",
            Sports:"sports",
          },
          CustomerActions:{
            browse:"Browse Stores",
            makecomplaint:"Make Complaint"
          },
          footer:{
            products:"Products Categories",
            electronic:"electronic producrs",
            food:"food products",
            items:"items",
            clothes:"clothes",
            furniture:"furniture",
            books:"books",
            mobiles:"Mobiles ",
            kitchen:"kitchen products",
            games:"games",
            Sports:"sports",
            quick:"quick links",
            home:"Home",
            aboutus:"About us",
            service:"Services",
            blog:"Blog",
            contact:"Contact us",
            email:"haythammhmoud@gmail.com",
            first_phone:"+0100-338-8637",
            second_phone:"+0109-555-8800",
            subscribe:"Subscribe To Our Newsletter",
            enteremail:"enter your email",
            follow:"follow us on social media",
            download:"download our app",
            copy:"@Copyright 2022"
            ,right:".All Rights Reserved"
          },
          OrdersChart:{
            order:"your orders"
          },
          SellerActions:{
            create:"Create Store",
            visit:"Visit Store",
            createInvoice:"Create Invoice ",
            makeComplaint:"Make Complaint",
            transaction:"Your Transactions"
          },
          AdminSideMenu:{
            admin:"Admin Dashboard",
            price:"",
            complaints:"complaints",
            transaction:"Transactions",
            signup:"SignUp Request",
            manage:"Manage users",
            customer:"Customers",
            seller:"Individal Seller",
            company:"Companies",
            chart:"Charts",
            balance:"current balance",
          },
          category:{
            categ:"Category",
            shoes:"shoes",
            laptop:"Laptop",
            electronic:"Electronics",
            man:"Men",
            woamen:"woamen",
            price_range:"Price Range",
            from:"From",
            to:"TO"
          },
          StoreCard:{
            store_name:"Store Name",
            visit_store:"Visit Store",
            rating:"Put Rating Here",
            item_details:"View Item Details",
            
          },
          StoreItemCardDemo:{
            prod_name:"Product Name",
            prod_desc:"",
            prod_price:"",
            add:"Add to Cart",
            buy:"Buy Now",
          },
          StoreSideNavbar:{
            filter_store:"Filter Your Store",
            order_num:"Order Numbers",
            over:"Overview",
            store_rating:"stores Ratings",
            more:"OR More",
            seller_rank:"Seller Level",
            gold:"Golden Seller",
            silver:"Silver Seller",
            bronze:"Bronze Seller",
          },
          BrowseStoreSideNav:{
            easyaccount:"My Easy account",
            /*the rest are same as StoreSideNavbar al fo2eha*/ 
          },
          PaymentForm:{
            payment:"PaymentForm",
            card_name:"Name on The Card",
            card_num:"Card Number",
            currency:"Currency",
            select_currency:"Select Currency",
            eg:"EGP",
            dollar:"Dollar",
            expire_date:"Expiration Date",
            month:"Month",
            year:"Year",
            sec_code:"Security Code",
            card_info:"Save Card Info",
            safety:"For your safety",
            safety_1:"",
            safety_2:"",
            safety_3:"",
            complete:"Complete Payment",
          },
          comment:{
            comment_title:"Comment Title",
            comment_text:"",
            comment_reply:"Reply",
            comment_time:"",
          },
          BankDetailsCard:{
            bank_detail:"Bank Details",
            expire_date:"Expiration Date",
            withdraw:"Withdraw Money",
          },
          BuyItemInfoCard:{
            summary:"Summary",
            item_name:"Item Name",
            item_info_text:"",
            item_price:"Item Price",
            price:"11",
            discount:"Discount",
            discount_price:"11",
            delivery:"Delivery Charge",
            delivery_price:"11",
            total:"Total:",
            total_price:"124:",
            terms_of_item_info_1:"By completing your purchase you agree to these",
            terms_of_item_info_2:"erms of Service.",
          },
          CartItemInfoCard:{
            item_name:"Item Name",
            cart_text:"",
            buy:"",
            cart_price:"",
          },
          PhoneVerificationCard:{
            req_field:" This field is required!",
            pass_alert:"The password must be between 6 and 40 characters.",
            verify:"Verify Phone Number",
            phone_num:"Phone Number",
            confirm_phone:"Confirm Phone Number",
            next:"Next Step",
          },
          RecommendItemInfoCard:{
            item_name:"Item Name",
            item_price:"123",
            item_detail:"Item Details",
            cart:"cart",
            buy:"buy",
          },
          ViewItemInfoCard:{
            item_view_name:"Item Name",
            item_view_price:"",
            item_view_status:"",
            rating:"8 ratings",
            item_view_desc:"",
            add:"add",
            order:"order now",
            rate_our_item:"Rate our item ! it will not take a second",
            rate_our_product:"Rate Our Product Now",
            save:"Save Changes",
          },
          WithdrawalTypeCard:{
            withdrawal_type:"Withdrawal Type",
            who_will_withdraw:"who will withdraw the funds",
            self:"My Self",
            other:"other",
            type_withdraw:"what type of account will be used to withdraw",
            personal:"personal account",
            commerical:"commercial account",

          },
        }, 
    },
  },
  ar: {
    translation: {
      home : {
        navbar : {
          services: "??????????????",
          aboutus: "???? ????????????",
          offers: "????????????",
          contacts: "?????????? ????????",
          privacy_policy: "?????????? ????????????????",
          terms_of_service: "???????? ????????????",
          login : "?????? ????????????",
        },
        welcome : {
          welcome: "???????? ???????????? ?????????? ?????? ????????????. ???????? ?????????????? ?????????????????????? ?????? ???????? ???? ??????",
          start_now: "???????? ??????????!",
        },
        services : {
          services_we_offer : "???? ?????????? ???? ??????????",
          services_description : "???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ??????????????",
          grwoing_business : "?????? ??????????????",
          grwoing_business_description : "???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ??????????????",
          save_time : "?????? ??????????",
          save_time_description : "???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ??????????????",
          customer_support : "???????? ??????????????",
          customer_support_description : "???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ??????????????",
          make_invoice : "?????????? ??????????????",
          make_invoice_description : "???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ??????????????",
          make_your_market : "?????????? ??????????",
          make_your_market_description : "???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ??????????????",
          make_shopping : "???? ??????????????",
          make_shopping_description : "???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ??????????????",
        },
        about : {
          about_my_easy : "???? ?????? ????????",
          about_my_easy_description : "???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ??????????????",
          first_section_title : "????????????",
          first_section_description_1 : "???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ??????????????",
          first_section_description_2 : "???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ??????????????",
          second_section_title : "??????????",
          second_section_description_1 : "???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ??????????????",
          second_section_description_2 : "???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ??????????????",
          read_more : "???????? ????????????",
        },
        panel : {
          title : "?????????? ???????? ???? ???????? ??????????????",
          description : "?????????????? ?????????????? ???????????? ???????????? ??????????????",
          action : "????????"
        },
        offers : {
          what_we_offer : "???? ?????????? ??????",
          what_we_offer_description : "???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ??????????????",
          first_section_title : "?????? ????????",
          first_section_description_1 : "?????????? ???????? ???? ???????????? ???? ?????????????? ???????????????? ?????????????? ?????????????? ?????????????? ?????????????? ???? ???????????? ???????? ?????? ????????????.",
          first_section_description_2 : "?????? ???????? ?????? ???????????? ???? ???????? ?????????? ???????????? ?????? ???????????? ?????????? ???????????????? ?? ???????????????? ?? ???????????????? ????????????????. ?????? ???????? ???????? ?????????? ???????????????? ?????? ?????????????? ???????????? ?????????????????????????? ?????????????? ???? ???????? ?????????? ????????????.",
          second_section_title : "?????? ????????",
          second_section_description_1 : "?????????? ???????? ???? ???????????? ???? ?????????????? ???????????????? ?????????????? ?????????????? ?????????????? ?????????????? ???? ???????????? ???????? ?????? ????????????.",
          second_section_description_2 : "?????? ???????? ?????? ???????????? ???? ???????? ?????????? ???????????? ?????? ???????????? ?????????? ???????????????? ?? ???????????????? ?? ???????????????? ????????????????. ?????? ???????? ???????? ?????????? ???????????????? ?????? ?????????????? ???????????? ?????????????????????????? ?????????????? ???? ???????? ?????????? ????????????.",
        },
        contactus : {
          contact:"?????????? ????????",
          name:"??????????",
          email:"????????????",
          subject:"??????????????????",
          content:"??????????????",
          send:"??????????",
        },
        acccustomerlinks:{
          wallet:"??????????????",
          ordernum:"?????? ??????????????????",
          myprofile:"??????????",
          mycart:"??????????",
          myorders:"????????????",
          overview:"???????? ????????",
          help:"????????????",
          privacy:"???????????????? ????????????????",
          terms:"???????????? ?? ????????????"
        },
        accnavbar:{
          profile:"???????? ????????????",
          search:"??????",
          notfications:"?????????????? ",
          customer_order_product:"?????? ?????? ?????????????? ????????????",
          action:"???????? ?????????? ??????",
          dropdown:"dropdown",
          edit:"??????????",
          logout:"?????????? ????????????",
        },
        AccountInfoSection:{
          welcome:"?????????? ???? ???? ???????? ????????????",
        },
        AccSellerLinks:{
          wallet:"??????????????",
          dollar:"?????????????? ?????? ??????????????",
          withdraw:"?????? ??????????",
          check:"?????? ?? ???? ???????????? ?????? ?????????????? ????????",
          order_num:"?????? ??????????????????",
          profile:"??????????",
          store:"??????????",
          orders:"????????????",
          invoices_1:"????????????????",
          invoices_2:"??????????????",
          invoices_3:"?????????? ????????????",
          complaints_0:"?????????????? ",
          complaints_1:"??????????",
          complaints_2:"???????? ??????????",
          integration:"?????????????? ??????????????",
          view:"????????",
          help:"????????????",
          priv:"???????????????? ????????????????",
          terms:"???????????? ?? ????????????",
        },
        AccSideNavbar:{
          dashboard:"???????? ??????????????",
        },
        CategoriesNavbar:{
          electronic:"????????????????????",
          page1_1:"????????1_1",
          page1_1:"????????2_1",
          page1_1:"????????3_1",
          food:"????????",
          items:"??????????",
          clothes:"??????????",
          furniture:"????????",
          books:"??????",
          mobiles:"?????????? ????????????",
          kitchen:"?????????? ????????",
          games:"??????????",
          Sports:"??????????",
        },
        CustomerActions:{
          browse:"???????? ??????????????",
          makecomplaint:"???????? ??????????"
        },
        footer:{
          products:"????????????????",
          electronic:"????????????????????",
          food:"????????",
          items:"??????????",
          clothes:"??????????",
          furniture:"????????",
          books:"??????",
          mobiles:"?????????? ????????????",
          kitchen:"?????????? ????????",
          games:"??????????",
          Sports:"??????????",
          quick:"?????????? ?????????? ",
          home:"???????????? ????????????????",
          aboutus:"?????????????? ??????",
          service:"??????????",
          blog:"??????????",
          contact:"?????????? ????????",
          email:"dartagency@gmail.com",
          phone:"+0123-345-6789",
          subscribe:"?????????? ???? ???????????? ??????????????????",
          enteremail:"???????? ?????????? ????????????????????",
          follow:"???????????? ?????? ?????????? ?????????????? ??????????????????",
          download:"???? ???????????? ??????????????",
          copy:"@???????? ?????????? ???????????? 2021"
          ,right:".???? ???????????? ????????????"
        },
        OrdersChart:{
          order:"????????????"
        },
        SellerActions:{
          create:"?????????? ????????",
          visit:"?????????? ????????",
          createInvoice:"?????????? ????????????",
          makeComplaint:"???????? ??????????",
          transaction:"????????????????"
        },
        AdminSideMenu:{
          admin:"???????? ???????? ??????????????",
          price:"",
          complaints:"??????????",
          transaction:"????????????????",
          signup:"?????? ??????????????",
          manage:"?????????? ????????????????????",
          customer:"??????????????",
          seller:"???????? ????????",
          company:"??????????????",
          chart:"???????????? ????????????????",
          balance:"???????????? ????????????",
        },
        category:{
          categ:"Category",
          shoes:"shoes",
          laptop:"Laptop",
          electronic:"Electronics",
          man:"Men",
          woamen:"woamen",
          price_range:"Price Range",
          from:"From",
          to:"TO"
        },
        StoreCard:{
          store_name:"Store Name",
          visit_store:"Visit Store",
          rating:"Put Rating Here",
          item_details:"View Item Details",
          
        },
        StoreItemCardDemo:{
          prod_name:"Product Name",
          prod_desc:"",
          prod_price:"",
          add:"Add to Cart",
          buy:"Buy Now",
        },
        StoreSideNavbar:{
          filter_store:"Filter Your Store",
          order_num:"Order Numbers",
          over:"Overview",
          store_rating:"stores Ratings",
          more:"OR More",
          seller_rank:"Seller Level",
          gold:"Golden Seller",
          silver:"Silver Seller",
          bronze:"Bronze Seller",
        },
        BrowseStoreSideNav:{
          easyaccount:"My Easy account",
          /*the rest are same as StoreSideNavbar al fo2eha*/ 
        },
        PaymentForm:{
          payment:"PaymentForm",
          card_name:"Name on The Card",
          card_num:"Card Number",
          currency:"Currency",
          select_currency:"Select Currency",
          eg:"EGP",
          dollar:"Dollar",
          expire_date:"Expiration Date",
          month:"Month",
          year:"Year",
          sec_code:"Security Code",
          card_info:"Save Card Info",
          safety:"For your safety",
          safety_1:"",
          safety_2:"",
          safety_3:"",
          complete:"Complete Payment",
        },
        comment:{
          comment_title:"Comment Title",
          comment_text:"",
          comment_reply:"Reply",
          comment_time:"",
        },
        BankDetailsCard:{
          bank_detail:"Bank Details",
          expire_date:"Expiration Date",
          withdraw:"Withdraw Money",
        },
        BuyItemInfoCard:{
          summary:"Summary",
          item_name:"Item Name",
          item_info_text:"",
          item_price:"Item Price",
          price:"11",
          discount:"Discount",
          discount_price:"11",
          delivery:"Delivery Charge",
          delivery_price:"11",
          total:"Total:",
          total_price:"124:",
          terms_of_item_info_1:"By completing your purchase you agree to these",
          terms_of_item_info_2:"erms of Service.",
        },
        CartItemInfoCard:{
          item_name:"Item Name",
          cart_text:"",
          buy:"",
          cart_price:"",
        },
        PhoneVerificationCard:{
          req_field:"?????? ???????????? ????????????!",
          pass_alert:"?????? ???? ???????? ???????? ???????????? ?????? 6 ?? 40 ??????????.",
          verify:"???????? ???? ?????? ????????????",
          phone_num:"?????? ????????????????",
          confirm_phone:"?????????? ?????? ????????????",
          next:"???????????? ??????????????",
        },
        RecommendItemInfoCard:{
          item_name:"?????? ????????????",
          item_price:"123",
          item_detail:"???????????? ????????????",
          cart:"???????? ????????????",
          buy:"??????????",
        },
        ViewItemInfoCard:{
          item_view_name:"?????? ????????????",
          item_view_price:"",
          item_view_status:"",
          rating:"8 ??????????????",
          item_view_desc:"",
          add:"??????????",
          order:"???????? ????????",
          rate_our_item:"?????? ?????????? ??????????! ???? ???????????? ?????????? ??????????",
          rate_our_product:"?????? ???????????? ????????",
          save:"?????? ??????????????????",
        },
        WithdrawalTypeCard:{
          withdrawal_type:"?????? ????????????????",
          who_will_withdraw:"???? ?????????? ??????????????",
          self:"??????",
          other:"??????",
          type_withdraw:"???? ???? ?????? ???????????? ???????? ???????? ???????????????? ??????????",
          personal:"???????? ????????",
          commerical:"???????? ??????????",

        },
      }
    },
  },
};
i18next
  .use(new Backend(null, {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  }))
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    debug: process.env.NODE_ENV === "development",
    supportedLngs: ["en", "ar"],
    nonExplicitSupportedLngs: true,
  });
export default i18next;