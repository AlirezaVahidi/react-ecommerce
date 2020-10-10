import React, { useEffect } from "react";
import Swiper from "swiper";
// Import Swiper styles
import "swiper/css/swiper.min.css";
// your custom css must come second to overwrite certain stylings in swiper.css
import "./CoverFlowCarousel.css";

import Product from "../product/Product";
import { useSelector } from "react-redux";

const CoverFlowCarousel = () => {
  const products = useSelector((state) => state.product.value);
  useEffect(() => {
    const swiper = new Swiper(".carousel", {
	  spaceBetween: 15,
	  slidesPerView: 4,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="carousel swiper-container card">
      <div className="swiper-wrapper">
        {products.map((product) => (
          <div className="swiper-slide" key={product.id}>
            <Product
              type={product.type}
              name={product.name}
              id={product.id}
              price={product.price}
              key={product.id}
            />
          </div>
        ))}
      </div>
      {/* <div className="swiper-pagination" /> */}
      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />
    </div>
  );
};

export default CoverFlowCarousel;
