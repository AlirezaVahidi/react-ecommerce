import React from "react";
import classes from "./shoppingBasketButton.module.css";
import shopLogo from "../../Resources/icons/shop-logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { showBasket } from "../../store/reducers/basketSlice"

const ShoppingButton = (props) => {
	const products = useSelector(state => state.product.value);
	const dispatch = useDispatch();
	const selectedProducts = products.filter((product) => product.count !== 0);
	return (
		<button
			type="button"
			className={classes.shopBtn}
			onClick={() => dispatch(showBasket())}
		>
			<img className={classes.shoplogo} src={shopLogo} alt="Shopping Logo" />
			<span>سبد خرید</span>
			{selectedProducts.length === 0 ? null : (
				<div className={classes.badgeCounter}>{selectedProducts.length}</div>
			)}
		</button>
	);
};

export default ShoppingButton;
