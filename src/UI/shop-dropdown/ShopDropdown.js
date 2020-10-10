import React from "react";
import storeLogo from "../../Resources/icons/store.svg";

const ShopDropdown = (props) => {
  const style = {
    textAlign: "right",
    direction: "rtl",
    fontSize: "18px",
    fontWeight: "bold",
    letterSpacing: "0px",
    color: "#06B1B5",
    backgroundColor: "transparent",
    opacity: 1,
    height: "54px",
  };

  const Style1 = {
    textAlign: "right",
    fontSize: "18px",
    fontWeight: "bold",
  };
  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn dropdown-toggle"
        style={style}
        data-toggle="dropdown"
      >
        <img style={{ paddingLeft: "10px" }} src={storeLogo} alt="Store" />
        فروشگاه ها
      </button>
      <div className="dropdown-menu">
        <a style={Style1} className="dropdown-item" href="#اُکالا">
          اُکالا
        </a>
        <a style={Style1} className="dropdown-item" href="#افق کوروش">
          افق کوروش
        </a>
      </div>
    </div>
  );
};

export default ShopDropdown;
