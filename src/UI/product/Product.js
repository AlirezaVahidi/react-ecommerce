import React from "react";
import classes from "./product.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
	decrement,
	increment,
	incrementByAmount,
} from "../../store/reducers/counterSlice";
import AddToBasketButton from "../add-to-basket-button/AddToBasketButton";

const Product = (props) => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter.value);
	return (
		<div className={classes.productContainer}>
			<img
                className={classes.productImg}
				src={`https://cdn.okala.com/Media/Index/Product/${props.id}/210/210`}
				alt={`product ${props.id}`}
			/>
			<div className={classes.productTitle}>
                    <p>{props.name}</p>
               </div>
			<div className={classes.productPrice}>
                    <p>{props.price} <span style={{fontSize: '14px', fontWeight:'500'}}>ریال</span></p>
               </div>
			<div className={classes.addToBasket}>
				<AddToBasketButton id={props.id} />
			</div>
		</div>
	);
};

export default Product;
