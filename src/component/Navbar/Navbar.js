import React from "react";
import "./Navbar.css";
import logo from "./images/SkinClinic.png";
import logo2 from "./images/Meubel House_Logos-05.png";
import { Link , NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-xxl">
          <a className="navbar-brand" href="/">
            <div className="logo-image">
              <img src={logo2} alt="logo2" />
              <img src={logo} alt="logo1" />
            </div>
          </a>
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="icon">
              <div className="icon-area">
                <ul>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="nav-item" data-toggle="modal" data-target="#exampleModal">
                    <Link className="nav-link" to="/cart">
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="shopping-cart-first">
                <img src="images/Group 146.png" alt="" />
                <div className="shopping-cart-first-text">
                  <p className="as">Asgaard sofa</p>
                  <p className="shopping-cart-rs">1 X Rs. 250,000.00</p>
                </div>
                <div className="close-button">
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                </div>
              </div>




              <div className="shopping-cart-second">
                <img src="images/Group 146 (1).png" alt="" />
                <div className="shopping-cart-first-text">
                  <p className="as">Asgaard sofa</p>
                  <p className="shopping-cart-rs">1 X Rs. 270,000.00</p>
                </div>
              </div>

              <div className="total">
                <p className="subtotal">Subtotal</p>
                <p className="subtotal-rs">Rs. 520,000.00</p>
              </div>

              <div className="shopping-cart-button">
                <div className="first-button-section">
                  <button type="button">Cart</button>
                </div>

                <div className="second-button-section">
                  <button type="button">Checkout</button>
                </div>

                <div className="third-button-section">
                  <button type="button">Comparison</button>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

    </>
  );
}

export default Navbar;
