import React from "react";
import classes from './locationInfo.module.css';

const LocationInfo = (props) => {
	return (
		<div>
			<p className={classes.info}>
				شما در حال مشاهده موجودی کالاها در محدوده سعادت آباد هستید. برای مشاهده
				موجودی کالاها در نزدیک ترین فروشگاه به شما، ابتدا محدوده آدرس خود را
				انتخاب کنید
			</p>
		</div>
	);
};

export default LocationInfo;
