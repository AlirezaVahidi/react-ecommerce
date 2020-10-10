import React, { Component } from "react";
import Swiper from "swiper";
// Import Swiper styles
import "swiper/css/swiper.min.css";
// your custom css must come second to overwrite certain stylings in swiper.css
import "./slider.css";

const slidePicsId = [
  309972,
  309854,
  320768,
  320767,
  320748,
  309860,
  310538,
  309169,
  320764,
  309840,
  309531,
  310489,
];
class Slider extends Component {
  componentDidMount() {
    this.swiper = new Swiper(".okslider", {
      loop: true,
      spaceBetween: 0,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      slidesPerView: 1,
      effect: "fade",
      pagination: {
        el: ".swiper-pagination-edited",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  render() {
    return (
      <div className="okslider swiper-container card">
        <div className="swiper-wrapper">
          {slidePicsId.map((id) => (
            <div
              className="swiper-slide"
              style={{
                backgroundImage:
                  `url(https://cdn.okala.com/Media/Index/Slider/${id}/1365/425)`,
                height: "360.55px",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              key={id}
            ></div>
          ))}
        </div>
        <div className="swiper-pagination-edited" />
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </div>
    );
  }
}

export default Slider;

// import React, { Component } from "react";
// // import Swiper core and required components
// import SwiperCore, {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   Autoplay,
// } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/scrollbar/scrollbar.scss";
// import "./slider.css";

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
// const slidePicsId = [
//   309972,
//   309854,
//   320768,
//   320767,
//   320748,
//   309860,
//   310538,
//   309169,
//   320764,
//   309840,
//   309531,
//   310489,
// ];
// export default class slider extends Component {
//   componentDidMount() {
//     this.swiper = new Swiper(".swiper-container", {
//       spaceBetween: 40,
//       autoplay: { delay: 4000, disableOnInteraction: false },
//       slidesPerView: 1,
//       navigation: {},
//       pagination: { clickable: true },
//       //   scrollbar={{ draggable: true }}
//       //   onSwiper={(swiper) => console.log(swiper)}
//       //   onSlideChange={() => console.log("slide change")}
//     });
//   }
//   render() {
//     return (
//       <div className="swiper-container">
//         <div className="swiper-wrapper">
//           {slidePicsId.map((id) => (
//             <div className="swiper-slide" key={id}>
//               <img
//                 className="img-swp"
//                 src={`https://cdn.okala.com/Media/Index/Slider/${id}/1365/425`}
//                 alt={id}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
