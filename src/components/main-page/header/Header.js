import React from "react";
import classes from "./header.module.css";
import okalabg from "../../../Resources/icons/brand_BG.svg"
import okalaLogo from "../../../Resources/icons/okala-logo.svg";
import taminIcon from "../../../Resources/icons/tamin.svg";
import blogIcon from "../../../Resources/icons/blog.svg";
import ShoppingBasketButton from "../../../UI/shopping-basket-button/ShoppingBasketButton";
import PhoneNumberDropdown from "../../../UI/number-dropdown/PhoneNumberDropdown";
import Searchbar from "../../../UI/searchbar/Searchbar";
import ShopDropdown from "../../../UI/shop-dropdown/ShopDropdown";
import Navbar from "../navbar/Navbar";

const Header = (props) => {
  return (
    <React.Fragment>
      <div className="container-fluid rtl top-header">
        <div className="row d-flex align-items-center" style={{height: "52px", flexWrap: "nowrap"}}>
          <div className="w-75" style={{wordWrap: "break-word"}}>
            <p className={classes.locInfo}>
              شما در حال مشاهده موجودی کالاها در محدوده <span style={{color:'#E32861'}}>سعادت آباد</span> هستید. برای
              مشاهده موجودی کالاها در نزدیک ترین فروشگاه به شما، ابتدا محدوده
              آدرس خود را انتخاب کنید
            </p>
          </div>

          <div className="w-25 justify-content-end">
            <div className={classes.tamin}>
              <img className={classes.icon} src={taminIcon} alt="Tamin icon" />
              <span className={classes.iconText}>تامین کنندگان</span>
            </div>
            <div className={classes.blog}>
              <img className={classes.icon} src={blogIcon} alt="Tamin icon" />
              <span className={classes.iconText}>بلاگ</span>
            </div>
          </div>
        </div>
      </div>

      <div id="stickyHeader" className="container-fluid rtl bg-white">
        <div className="row h100 space-between">
          <div className="navbar-brand" style={{position: 'relative'}}>
            <img src={okalabg} alt="OKALA BACKGROUND" style={{width:'320px', height: '100px', position:'absolute',top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
            <img src={okalaLogo} alt="OKALA LOGO" style={{transform:'scale(0.95)'}} />
          </div>
          <ShopDropdown />
          <Searchbar />
          <PhoneNumberDropdown />
          <ShoppingBasketButton />
        </div>
      </div>
      <Navbar />
    </React.Fragment>
  );
};

export default Header;
