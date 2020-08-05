import React from "react";
// import Swiper core and required components
import SwiperCore, {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import Product from "../product/Product";
import "./CoverFlowCarousel.css";
import { useSelector } from "react-redux";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default () => {
  const products = useSelector(state => state.product.value);
	return (
		<Swiper
			spaceBetween={0}
			//autoplay={{delay: 2000, disableOnInteraction:false}}
			slidesPerView={4}
			navigation
			pagination={{ clickable: true }}
			//scrollbar={{ draggable: true }}
			//onSwiper={(swiper) => console.log(swiper)}
			//onSlideChange={() => console.log('slide change')}
		>
			{products.map((product) => (
				<SwiperSlide>
					<Product
						type={product.type}
						name={product.name}
						id={product.id}
						price={product.price}
						key={product.id}
					/>
				</SwiperSlide>
			))}
			
		</Swiper>
	);
};
