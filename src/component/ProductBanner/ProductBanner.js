import React from 'react'
import './ProductBanner.css'
import Image from './images/banner.png'
import icon from './images/icons8-greater-than-50.png'
import { NavLink } from 'react-router-dom'
import logo from'./images/Meubel House_Logos-05.png'
function ProductBanner(props) {
  const bannerImage = {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    width: '100%',
    padding: '100px 0'

  };
  return (
    <>
      <div className='container-xxl'>
        <div className="shop-banner">
          <div className="shop-banner-image" style={bannerImage}>
            <div className="banner-text">
              <img src={logo} alt={'logo'} />
              <p className="big-shop">{props.BannerTitle}</p>
            </div>
            <div className="click">
              <NavLink className="home-back" to="/">
                <p className="home">Home</p>
              </NavLink>
              <p className="icon2"> <img src={icon} alt='icon' /> </p>

              <NavLink className="shop-back" to="/shop">
                <p className="shop">Shop</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductBanner
