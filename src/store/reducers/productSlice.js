import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
	name: "product",
	initialState: {
		value: [
			{
				type: "juice",
				name: "نکتار پرتقال پالپ دار یک لیتری شادلی",
				id: "309638",
				price: 150000,
				count: 0,
			},
			{
				type: "fruit",
				name: "گلابی اسپادانا یک کیلویی بلوط",
				id: "309989",
				price: 393750,
				count: 0,
			},
			{
				type: "tea",
				name: "چای کله مورچه ساده 450 گرمی بلوط",
				id: "120831",
				price: 384450,
				count: 0,
			},
			{
				type: "scrub",
				name: "اسکراب بدن گیلاس 200 میلی لیتری فروتینی",
				id: "165151",
				price: 379500,
				count: 0,
			},
			{
				type: "milk",
				name: "شیر کاکائو 1 لیتری دومینو",
				id: "199217",
				price: 108000,
				count: 0,
			},
			{
				type: "tea",
				name: "چای ارل گری پلاس 500 گرمی شهرزاد",
				id: "138620",
				price: 679150,
				count: 0,
			},
			{
				type: "gummi candy",
				name: "بسته پاستیل میوه ای دکتر بن با رنگ طبیعی",
				id: "234745",
				price: 70000,
				count: 0,
			},
		],
	},
	reducers: {
		incrementById: (state, action) => {
			const selectedProduct = state.value.filter(
				(product) => product.id === action.payload
			);
			selectedProduct[0].count += 1;
        },
        decrementById: (state, action) => {
            const selectedProduct = state.value.filter(
				(product) => product.id === action.payload
			);
			selectedProduct[0].count -= 1;
        }
	},
});

export const { incrementById, decrementById } = productSlice.actions;

export default productSlice.reducer;
