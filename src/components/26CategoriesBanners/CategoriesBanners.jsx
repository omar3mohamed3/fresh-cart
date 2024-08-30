import React from "react";

export default function CategoriesBanners() {
  const bannerStyle1 = {
    background: `url(${require("../../assets/imgs/grocery-banner.png")}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const bannerStyle2 = {
    background: `url(${require("../../assets/imgs/grocery-banner-2.jpeg")}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6 mb-3 mb-lg-0">
            <div>
              <div className="py-5 px-4 rounded-3" style={bannerStyle1}>
                <div>
                  <h3 className="banner-h mb-1">Fruits &amp; Vegetables</h3>
                  <p className="banner-p mb-4 text-muted">
                    Get Upto
                    <span className="fw-bold mx-1">30%</span>
                    Off
                  </p>
                  <span className="btn btn-dark fw-bold banner-btn">Shop Now</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div>
              <div className="py-5 px-4 rounded-3" style={bannerStyle2}>
                <div>
                  <h3 className="banner-h mb-1">Freshly Baked Buns</h3>
                  <p className="banner-p mb-4 text-muted">
                    Get Upto
                    <span className="fw-bold mx-1">25%</span>
                    Off
                  </p>
                  <span className="btn btn-dark fw-bold banner-btn">Shop Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
