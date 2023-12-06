import React, { useState, useEffect } from "react";
import "./CheckOut.css";
import ProductBanner from "../ProductBanner/ProductBanner";
import FooterSelection from "../FooterSelection/FooterSelection";

function CheckOut({ checkOut }) {
  const { subtotal, total, allProduct } = checkOut;

  return (
    <>
      <ProductBanner BannerTitle={"Check Out"} />
      <form>
        <div className="container-xl mt-5">
          <div className="row">
            <div className="col-md-5 col-11 mx-auto">
              <h3 className="heading">Billing details</h3>
              <div className="marge-div">
                <div className="input-box">
                  <div className="input-type">
                    <label htmlFor="fname">First name</label>
                  </div>
                  <div className="input-type">
                    <input
                      type="text"
                      className="fast-box"
                      id="fname"
                      name="fname"
                      required
                    />
                  </div>
                </div>
                <div className="input-box">
                  <div className="input-type">
                    <label htmlFor="lname">Name name</label>
                  </div>
                  <div className="input-type">
                    <input
                      type="text"
                      className="fast-box"
                      id="lname"
                      name="lname"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="marge-div">
                <div className="input-box">
                  <div className="input-type">
                    <label htmlFor="company">Company Name (Optional)</label>
                  </div>
                  <div className="input-type">
                    <input
                      type="text"
                      className="second-box"
                      id="company"
                      name="company"
                    />
                  </div>
                </div>
              </div>
              <div className="marge-div">
                <div className="input-box">
                  <div className="input-type">
                    <label htmlFor="country">Country / Region</label>
                  </div>
                  <div className="input-type">
                    <select
                      name="country"
                      className="second-box2"
                      id="country"
                      required
                    >
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="india">India</option>
                      <option value="usa">USA</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="marge-div">
                <div className="input-box">
                  <div className="input-type">
                    <label htmlFor="street">Street address</label>
                  </div>
                  <div className="input-type">
                    <input
                      type="text"
                      className="second-box"
                      id="street"
                      name="street"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="marge-div">
                <div className="input-box">
                  <div className="input-type">
                    <label htmlFor="town">Town / City</label>
                  </div>
                  <div className="input-type">
                    <input
                      type="text"
                      className="second-box"
                      id="town"
                      name="town"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="marge-div">
                <div className="input-box">
                  <div className="input-type">
                    <label htmlFor="province">Province</label>
                  </div>
                  <div className="input-type">
                    <select
                      name="province"
                      className="second-box2"
                      id="province"
                    >
                      <option value="Sri Lanka">Western Province</option>
                      <option value="india">India</option>
                      <option value="usa">USA</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="marge-div">
                <div className="input-box">
                  <div className="input-type">
                    <label htmlFor="zip">ZIP code</label>
                  </div>
                  <div className="input-type">
                    <input
                      type="text"
                      className="second-box"
                      id="zip"
                      name="zip"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="marge-div">
                <div className="input-box">
                  <div className="input-type">
                    <label htmlFor="phone">Phone</label>
                  </div>
                  <div className="input-type">
                    <input
                      type="text"
                      className="second-box"
                      id="phone"
                      name="phone"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="marge-div">
                <div className="input-box">
                  <div className="input-type">
                    <label htmlFor="email">Email address</label>
                  </div>
                  <div className="input-type">
                    <input
                      type="text"
                      className="second-box"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="marge-div">
                <div className="input-box">
                  <div className="input-type">
                    <textarea
                      name=""
                      className="second-box3"
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Additional information"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-11 mx-auto mt-5">
              <div className="row">
                <div className="col-md-6 col-11 mx-auto">
                  <div className="billing">
                    <h3>Product</h3>
                    <p>
                      <span>Your Total Product Price</span>
                    </p>
                    <h5>Subtotal</h5>
                    <h5>Total</h5>
                  </div>
                </div>
                <div className="col-md-6 col-11 mx-auto">
                  <div className="billing2">
                    <h3>Subtotal</h3>
                    <p>Rs. {checkOut.subtotal}</p>
                    <h5>Rs. {checkOut.total}</h5>
                    <h1>Rs. {checkOut.total}</h1>
                  </div>
                </div>
                <div className="radio-box my-4 ">
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input form-c"
                      id="radio1"
                      name="optradio"
                      value="option1"
                      required
                    />
                    <label className="form-check-label" htmlFor="radio1">
                      <h5>Direct Bank Transfer</h5>
                      <p>
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input form-c"
                      id="radio2"
                      name="optradio"
                      value="option2"
                      required
                    />
                    <label className="form-check-label" htmlFor="radio2">
                      <h5>Direct Bank Transfer</h5>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input form-c"
                      id="radio3"
                      name="optradio"
                      value="option3"
                      required
                    />
                    <label className="form-check-label" htmlFor="radio3">
                      <h5>Cash On Delivery</h5>
                    </label>
                  </div>
                </div>
                <div className="para">
                  <p>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our{" "}
                    <span>privacy policy.</span>
                  </p>
                  <button type="submit" className="btn confirm my-3">
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <FooterSelection />
    </>
  );
}

export default CheckOut;
