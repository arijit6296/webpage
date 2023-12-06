import { NavLink } from 'react-router-dom';
import './Footer.css';
import React from 'react'

function Footer() {
  return (
    <>
      <div className='container-xxl'>
      <div className="upper-section">
        <div className="upper-section-text">
            <div className="row">

                <div className="col-md-4">
                    <div className="first">
                        <div className="upper-text-first">Funiro.</div>
                        <p className="upper-text-second">400 University Drive Suite 200 Coral<span> Gables,</span><span>FL
                                33134
                                USA</span></p>
                    </div>
                </div>



                <div className="col-md-1">
                    <div className="second">
                        <p className="links">Links</p>
                        <NavLink to="/">
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/shop">
                            <li>Shop</li>
                        </NavLink>
                        <NavLink to="/about">
                            <li>About</li>
                        </NavLink>
                        <NavLink to="/contact">
                            <li>Contact</li>
                        </NavLink>
                    </div>
                </div>



                <div className="col-md-3">
                    <div className="third">
                        <p className="help">Help</p>
                        <a href="#">
                            <li>Payment Options</li>
                        </a>
                        <a href="#">
                            <li>Returns</li>
                        </a>
                        <a href="#">
                            <li>Privacy Policies</li>
                        </a>
                    </div>
                </div>



                <div className="col-md-4">
                    <div className="fourth">
                        <p className="newsletter">Newsletter</p>

                        <div className="button">
                            <div className="email-search-box">
                                <input placeholder="Enter Your Email Address" type="text" />

                            </div>

                            <div className="subscribe">
                                <a href="#">SUBSCRIBE</a>
                            </div>

                        </div>


                    </div>
                </div>


            </div>
        </div>
    </div>

    <div className="last-text">2023 furino. All rights reverved</div>
      </div>
    </>
  )
}

export default Footer
