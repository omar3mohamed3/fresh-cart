import { useContext } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { authContext } from "../../context/Authentication";
import { Helmet } from "react-helmet";
import VisaImage from "../../assets/imgs/visa.svg";
import MCImage from "../../assets/imgs/mastercard.svg";

export default function Profile() {
  const { userName } = useContext(authContext);

  if (userName === null) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5 vh-100">
        <ThreeCircles
          height="70"
          width="70"
          color="#565656"
          wrapperStyle={{}}
          wrapperclassName=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="container profile py-5">
        <div className="h4 p-2 rounded-3 text-center w-75 mx-auto mb-3 alert alert-success">
          Welcome, {userName}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="text-bg-dark p-2 rounded-3 w-auto text-center mb-3">
              <i className="fa-solid fa-location-dot me-2"></i>
              <span>Address</span>
            </div>

            <div>
              <div className="d-flex justify-content-end mb-3">
                <span className="btn btn-outline-primary">
                  Add a new address
                </span>
              </div>

              <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="card">
                    <div className="card-body p-3">
                      <p className="mb-3">
                        Jitu Chauhan
                        <br />
                        4450 North Avenue Oakland,
                        <br />
                        Nebraska, United States,
                        <br />
                        402-776-1106
                      </p>

                      <span className="btn btn-primary btn-sm">
                        Default address
                      </span>
                      <div className="mt-3">
                        <span className="text-inherit">Edit</span>
                        <span className="text-danger ms-3">Delete</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body p-3">
                      <p className="mb-3">
                        Nitu Chauhan
                        <br />
                        3853 Coal Road
                        <br />
                        Tannersville, United States
                        <br />
                        402-776-1106
                      </p>

                      <span className="text-primary">Set as Default</span>
                      <div className="mt-3">
                        <span className="text-inherit">Edit</span>

                        <span className="text-danger ms-3">Delete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 pt-5">
            <div className="text-bg-dark p-2 rounded-3 w-auto text-center mb-3">
              <i className="fa-regular fa-credit-card me-2"></i>
              <span>Payment Methods</span>
            </div>

            <div>
              <div className="d-flex justify-content-end mb-3">
                <span className="btn btn-outline-primary">Add Payment</span>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item py-4 px-0">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <img src={VisaImage} alt="" />

                      <div className="ms-4">
                        <h5 className="mb-0 h6">**** 1234</h5>
                        <p className="mb-0 small">Expires in 10/2023</p>
                      </div>
                    </div>
                    <div>
                      <span className="btn btn-outline-gray-400 disabled btn-sm">
                        Remove
                      </span>
                    </div>
                  </div>
                </li>

                <li className="list-group-item px-0 py-4">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <img src={MCImage} alt="" className="me-3" />
                      <div>
                        <h5 className="mb-0 h6">Mastercard ending in 1234</h5>
                        <p className="mb-0 small">Expires in 03/2026</p>
                      </div>
                    </div>
                    <div>
                      <span className="btn btn-outline-dark btn-sm">
                        Remove
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
