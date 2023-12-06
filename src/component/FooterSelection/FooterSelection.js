import './FooterSelection.css';
import React from 'react'
import logo1 from './Images/trophy 1.png'
import logo2 from './Images/guarantee.png'
import logo3 from './Images/shipping.png'
import logo4 from './Images/customer-support.png'
function FooterSelection() {
    return (
        <>
            <div className='container-xxl my-5'>
                <div className="footer-section">
                    <div className='row py-5 upper-first-box'>
                        <div className="col-md-3 col-6 ">
                            <div className="upper-first-box">
                                <div>
                                    <img src={logo1} alt="" className='upper-first-box1'/>
                                </div>
                                <div className="upper-text">
                                    <h2 className="upper-first-text">High Quality</h2>
                                    <h4 className="upper-second-text">crafted from top materials</h4>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3 col-6">
                            <div className="upper-first-box">
                                <div>
                                    <img src={logo2} alt="" className='upper-first-box1' />
                                </div>
                                <div className="upper-text">
                                    <h2 className="upper-first-text">Warranty Protection</h2>
                                    <h4 className="upper-second-text">Over 2 years</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-6">
                            <div className="upper-first-box">
                                <div>
                                    <img src={logo3} alt=""/>
                                </div>
                                <div className="upper-text2">
                                    <h2 className="upper-first-text">Free Shipping</h2>
                                    <h4 className="upper-second-text">Order over 150 $</h4>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3 col-6">
                            <div className="upper-first-box">
                                <div>
                                    <img src={logo4} alt="" />
                                </div>
                                <div className="upper-text2">
                                    <h2 className="upper-first-text">24 / 7 Support</h2>
                                    <h4 className="upper-second-text">Dedicated support</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterSelection
