import React from 'react';
import './BannerFirst.css';
import Image from './images/banner-image.png';
function BannerFirst() {
    const bannerImage = {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: "650px"
    };
  return (
    <>
    <div className='container-xxl'>
    <div className="banner">
        <div className="banner-image" style={bannerImage}>
        </div>

        <div className="banner-box">
            <p className="New-Arrival">New Arrival</p>
            <h1 className="box-text">Discover our<span>New Collection</span></h1>
            <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, est minus inventore
                laboriosam magni explicabo.</p>

            <div className="button-section">
                <button type="button">Buy Now</button>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default BannerFirst
