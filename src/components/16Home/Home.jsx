import React from "react";
import HomeSlider from "../12HomeSlider/HomeSlider";
import CategorySlider from "../13CategorySlider/CategorySlider";
import Products from "../14Products/Products";
import CategoriesBanners from "../26CategoriesBanners/CategoriesBanners";
import OurVision from "../27OurVision/OurVision";

export default function Home() {
  return (
    <>
      <div className="home container py-5">
        <div className="row gx-0 gy-5 mb-5">
          <div className="col-lg-9">
            <HomeSlider />
          </div>
          <div className="static-banner col-lg-3 d-none d-lg-block">
            <img
              loading="lazy"
              style={{ width: "100%", height: "200px" }}
              src={require("../../assets/imgs/grocery-banner-2.jpeg")}
              alt="grocery-banner-2"
            />
            <img
              loading="lazy"
              style={{ width: "100%", height: "200px" }}
              src={require("../../assets/imgs/grocery-banner.png")}
              alt="grocery-banner-1"
            />
          </div>
        </div>

        <CategorySlider />
        <CategoriesBanners />
        <Products />
        <OurVision />
      </div>
    </>
  );
}
