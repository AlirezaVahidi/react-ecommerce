import React from "react";
import classes from "./basket.module.css";
import BasketOrderItem from "./basket-order-item/BasketOrderItem";
import { useDispatch, useSelector } from "react-redux";
import { hideBasket } from "../../store/reducers/basketSlice";

const Basket = (props) => {
	const dispatch = useDispatch();
    const products = useSelector((state) => state.product.value);
    const selectedProducts = products.filter((product) => product.count !== 0);
    const totalPrices = selectedProducts.map(item => item.price * item.count)
	return (
		<div className={classes.basketContainer}>
			<div className={classes.basketHeader}>
				<div className={classes.topHeader}>
					<button className={classes.closeButton} onClick={() => dispatch(hideBasket())}>بستن سبد خرید</button>
					<button className={classes.enterButton}>لطفاً وارد شوید</button>
				</div>
				<div className={classes.bottomHeader}>
					<span>{totalPrices.length > 0 ? totalPrices.reduce((total, num) => (total+num)) : 0} <span style={{fontSize: '14px', fontWeight:'500'}}>ریال</span></span>
					<span>مجموع خرید</span>
				</div>
			</div>

			<div className={classes.basketMain}>
				{selectedProducts.map((product) => (
					<BasketOrderItem
						key={product.id}
						id={product.id}
						name={product.name}
						price={product.price}
					/>
				))}
			</div>

			<div className={classes.basketPrice}>قیمت کل</div>
			<div className={classes.basketAlarm}>
				<p>حداقل مبلغ سفارش بایستی 50,000 تومان باشد.</p>
			</div>
			<div className={classes.basketOrder}>ثبت سفارش</div>
		</div>
	);
};

export default Basket;
