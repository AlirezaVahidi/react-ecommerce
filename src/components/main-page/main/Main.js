import React from "react";
import classes from "./main.module.css";
import Card from "../../../UI/card/Card";
import Slider from "../../../UI/slider/Slider";

const Main = (props) => {
  return (
    <div className={classes.mainContainer} style={{position: 'relative'}}>
      <div id="mega-menu-overlay"></div>
      <main>
        <div className="row rtl center border mt-3">
          <div className="col-xl-3 border " style={{height: "500px"}}></div>
          <div className="col-xl-9 border ltr p-0" style={{height: "500px"}}>
            <div className="border center m-0">
              <Slider />
            </div>
            <div className="border center" style={{height: "100px"}}>
              <div className="card">
                <div className="card-body">
                  <div className="col-4">
                  </div>
                  <div className="col-4"></div>
                  <div className="col-4"></div>
                  <div className="col-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Card title="پرتخفیف ترین ها" id="1" />
        <Card title="پرفروش ترین ها" id="2" />
        <Card title="جدیدترین ها" id="3" />
      </main>
    </div>
  );
};

export default Main;
