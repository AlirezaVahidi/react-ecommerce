import React from "react";
import classes from "./header.module.css";
import LocationInfo from "./location-info/LocationInfo";
import okalaLogo from "../../../Resources/Logos/okala-logo.svg";
import taminLogo from "../../../Resources/Logos/tamin.svg";
import blogLogo from "../../../Resources/Logos/blog.svg";
import ShoppingButton from "../../../UI/shopping-basket-button/ShoppingBasketButton";
import PhoneNumberDropdown from "../../../UI/number-dropdown/PhoneNumberDropdown";
import Searchbar from "../../../UI/searchbar/Searchbar";
import ShopDropdown from "../../../UI/shop-dropdown/ShopDropdown";

const Header = (props) => {
	return (
		<div className={classes.headerContainer}>
			<div className={classes.topHeader}>
				<LocationInfo />
				<div className={classes.tamin}>
					<span className={classes.logotext}>تامین کنندگان</span>
					<img className={classes.logo} src={taminLogo} alt="Tamin Logo" />
				</div>
				<div className={classes.blog}>
					<span className={classes.logotext}>بلاگ</span>
					<img className={classes.logo} src={blogLogo} alt="Tamin Logo" />
				</div>
			</div>

			<div className={classes.mainHeaderGrid}>
				<div className={classes.item1}>
					<img src={okalaLogo} alt="Okala Logo" />
				</div>
                <div className={classes.item2}>
                    <ShopDropdown />
                </div>
                <div className={classes.item3}>
                    <Searchbar />
                </div>
                <div className={classes.item4}>
                    <PhoneNumberDropdown />
                </div>
                <div className={classes.item5}>
                    <ShoppingButton />
                </div>
			</div>
		</div>
	);
};

export default Header;
