import React from "react";
import ClockImage from "../../assets/imgs/clock.svg";
import GiftImage from "../../assets/imgs/gift.svg";
import PackageImage from "../../assets/imgs/package.svg";
import RefreshImage from "../../assets/imgs/refresh-cw.svg";


export default function OurVision() {
  return (
    <section className="our-vision py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div>
              <div className="mb-4">
                <img
                  loading="lazy"
                  src={ClockImage}
                  alt=""
                />
              </div>
              <h3 className="card-h h5 mb-3">10 minute grocery now</h3>
              <p className="card-p">
                Get your order delivered to your doorstep at the earliest from
                FreshCart pickup stores near you.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div>
              <div className="mb-4">
                <img
                  loading="lazy"
                  src={GiftImage}
                  alt=""
                />
              </div>
              <h3 className="card-h h5 mb-3">Best Prices &amp; Offers</h3>
              <p className="card-p">
                Cheaper prices than your local supermarket, great cashback
                offers to top it off. Get best pricess &amp; offers.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div>
              <div className="mb-4">
                <img
                  loading="lazy"
                  src={PackageImage}
                  alt=""
                />
              </div>
              <h3 className="card-h h5 mb-3">Wide Assortment</h3>
              <p className="card-p">
                Choose from 5000+ products across food, personal care,
                household, bakery, veg and non-veg &amp; other categories.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div>
              <div className="mb-4">
                <img
                  loading="lazy"
                  src={RefreshImage}
                  alt=""
                />
              </div>
              <h3 className="card-h h5 mb-3">Easy Returns</h3>
              <p className="card-p">
                Not satisfied with a product? Return it at the doorstep &amp;
                get a refund within hours. No questions asked policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
