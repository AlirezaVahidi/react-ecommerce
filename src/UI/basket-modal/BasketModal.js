import React from "react";
import classes from "./basketModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { hideBasket } from "../../store/reducers/basketSlice";
import Basket from "../basket/Basket";


const BasketModal = (props) => {
    const dispatch = useDispatch();
    const showBasket = useSelector((state) => state.showBasket.value);
	return (
		<div style={{display: showBasket ? '' : "none"}}>
			<div className={classes.modalBackdrop} onClick={() => dispatch(hideBasket())}></div>
			<div className={classes.modalContent}>
                <Basket />
            </div>
		</div>
	);
};

export default BasketModal;
