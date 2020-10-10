import React from "react";
import classes from "./basketOrderItem.module.css";
import OrderControlButton from "../../order-control-button/OrderControlButton";

const BasketOrderItem = (props) => {
	return (
		<div className={classes.orderContainer}>
			<div className={classes.imageContainer}>
				<img
					src={`https://cdn.okala.com/Media/Index/Product/${props.id}/90/90`}
					alt={`Product ${props.id}`}
				/>
			</div>
			<div className={classes.orderDetail}>
				<div className={classes.orderTitle}>{props.name}</div>
                <div className={classes.orderControlPanel}>
                    <span><OrderControlButton width='190px' color="#eee" scale={0.7} id={props.id} /></span>
                    <span className={classes.price}>{props.price} <span style={{fontSize: '14px', fontWeight:'500'}}>ریال</span></span>
                </div>
			</div>
		</div>
	);
};

export default BasketOrderItem;
