import React from "react";
import classes from './phoneNumberDropdown.module.css'

const PhoneNumberDropdown = (props) => {
	const style = {
		textAlign: 'right',
		fontSize: '16px',
		fontWeight: '500'
	}

	const btnTheme = classes.btnTheme
	return (
		<div className="dropdown">
			<button
				type="button"
				className={`btn ${btnTheme} dropdown-toggle`}
				data-toggle="dropdown"
			>
				09361484253
			</button>
			<div className="dropdown-menu dropdown-menu-right">
				<a style={style} className="dropdown-item" href="#حساب کاربری">
					حساب کاربری
				</a>
				<a style={style} className="dropdown-item" href="#تاریخچه خرید">
					تاریخچه خرید
				</a>
				<a style={style} className="dropdown-item" href="#خروج">
					خروج
				</a>
			</div>
		</div>
	);
};

export default PhoneNumberDropdown;
