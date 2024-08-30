import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/imgs/freshcart-logo.svg";
import { authContext } from "../../context/Authentication";
import { CartContext } from "../../context/CartContext";


export default function Navbar() {
  const { token, setToken } = useContext(authContext);
  const { numOfCartItems } = useContext(CartContext);
  const nav = useNavigate();
  function logout() {
    localStorage.removeItem("token");
    setToken(null);
    nav("/signin");
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink
            className="navbar-brand active"
            to="/"
            id="logo"
          >
            <img src={Logo} alt="Logo" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
              {token ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link "
                      aria-current="page"
                      to="/home"
                      id="home"
                           >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link "
                      aria-current="page"
                      to="/products"
                      id="products"
                 
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/categories"
                      id="categories"
                
                    >
                      Categories
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/brands"
                      id="brands"
                 
                    >
                      Brands
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/allorders"
                      id="orders"
               
                    >
                      Orders
                    </NavLink>
                  </li>

                </>
              ) : (
                ""
              )}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item py-3 py-lg-0 text-center d-lg-none d-xl-block me-xl-3">
                <i className="fa-brands me-2 cursor-pointer fa-facebook"></i>
                <i className="fa-brands me-2 cursor-pointer fa-x-twitter"></i>
                <i className="fa-brands cursor-pointer fa-instagram"></i>
              </li>

              {token ? (
                <>
                  <li className="nav-item me-lg-2" title="Cart">
                    <NavLink
                      className="shopCart nav-link position-relative"
                      to="/cart"
                      id="cart"                 
                    >
                      <i className="fa-solid fa-cart-shopping text-dark"></i>
                      <span className="position-absolute translate-middle badge rounded-2 bg-main">
                        {numOfCartItems}
                      </span>
                    </NavLink>
                  </li>

                  <li className="nav-item me-lg-1" title="WishList">
                    <NavLink
                      className="nav-link"
                      to="/wishList"
                      id="wishList"                 
                    >
                      <i className="fa-solid fa-heart text-dark"></i>
                    </NavLink>
                  </li>







                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/profile"
                      id="profile"
               
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/settings"
                      id="settings"
                 
                    >
                      Settings
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <span
                      onClick={logout}
                      style={{ cursor: "pointer" }}
                      className="nav-link"
                    >
                      SignOut
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link "
                      aria-current="page"
                      to="/signup"
                      id="signup"
                
                    >
                      SignUp
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/signin"
                      id="signin"
                
                    >
                      SignIn
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
