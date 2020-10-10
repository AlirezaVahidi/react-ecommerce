import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./addToBasketButton.module.css";
import plusSign from "../../Resources/icons/plus-sign.svg";
import {
	increment,
	decrement,
	incrementByAmount,
} from "../../store/reducers/counterSlice";
import {incrementById, decrementById} from "../../store/reducers/productSlice"
import OrderControlButton from "../order-control-button/OrderControlButton";

const AddToBasketButton = (props) => {
	const dispatch = useDispatch();
    const products = useSelector((state) => state.product.value);
    const selectedProduct = products.filter(product => product.id === props.id)
	return selectedProduct[0].count === 0 ? (
		<button
			className={classes.addToBasket}
			onClick={() => dispatch(incrementById(props.id))}
		>
			<span>افزودن به سبد</span>
			<span className={classes.plusIcon}>
				<img src={plusSign} alt="Plus Sign" className={classes.plusSvg} />
			</span>
		</button>
	) : (
		<OrderControlButton id={props.id} />
	);
};

export default AddToBasketButton;
