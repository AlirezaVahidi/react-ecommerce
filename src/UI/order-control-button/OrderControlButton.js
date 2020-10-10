import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import classes from './orderControlButton.module.css'
import plusSign from "../../Resources/icons/plus-sign.svg";
import {incrementById, decrementById} from "../../store/reducers/productSlice"



const OrderControlButton = (props) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.value);
    const selectedProduct = products.filter(product => product.id === props.id)
    return ( 
        <div style={{width: `${props.width}`, transform: `scale(${props.scale})`, backgroundColor: `${props.color}`}} className={classes.plusNegaControl}>
			<input className={classes.countInput} type="input" value={selectedProduct[0].count} readOnly={true} />
			<button
                style={{ backgroundColor: "transparent", padding: 0}}
				className={classes.plusIcon}
				onClick={() => dispatch(incrementById(props.id))}
			>
				<img src={plusSign} alt="Plus Sign" className={classes.plusSvg} />
			</button>
			<button
				style={{ backgroundColor: "transparent", padding: 0 }}
				className={classes.negaIcon}
				onClick={() => dispatch(decrementById(props.id))}
			>
				<img src={plusSign} alt="Negative Sign" className={classes.negaSvg} />
			</button>
		</div>
     );
}
 
export default OrderControlButton;