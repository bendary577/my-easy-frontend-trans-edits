import React from "react";
import { useTranslation } from "react-i18next";
import egypt from "../../../public/icons/home/egypt.png";
import britain from "../../../public/icons/home/english.png";

const LanguageSwitcher = ()=> {


    const { i18n } = useTranslation();

    const langIconStyle = {
        width: 30,
        height: 30,
      };

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")
        console.log(i18n.language);
    }

    return (
        <div className="lang" >  
            <a href="javascript:void(0);" onClick={()=>changeLanguage()}>
                <img src={i18n.language === "ar" ? britain :  egypt } style={langIconStyle} className="mt-2" alt="language" />
            </a>
        </div>
    );
}

export default LanguageSwitcher;
