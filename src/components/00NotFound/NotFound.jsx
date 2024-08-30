import React from "react";
import notFound from "../../assets/imgs/error.svg";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const nav = useNavigate();
  function goHome() {
    nav("/home");
  }

  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div className="container py-5 d-flex justify-content-center">
        <div className="row min-vh-100 justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="mb-4 mb-lg-0">
              <h2 className="h4">Something’s wrong here...</h2>

              <p className="mb-4 small text-muted">
                We can’t find the page you’re looking for.
                <br />
                Check out our help center or head back to home.
              </p>

              <span className="btn btn-sm btn-dark">Help Center</span>

              <span className="btn btn-sm btn-success ms-2" onClick={goHome}>
                Back to home
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img src={notFound} alt="not found" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
