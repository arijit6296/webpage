import React from 'react'
import './Rooms.css'
import img1 from './images/Rectangle 24.png'
import img2 from './images/Rectangle 25.png'
import img3 from './images/Rectangle 26.png'
function Rooms() {
  return (
    <>
      <div className='container-xxl'>
        <div className="middle-card">
          <div className="inner-box">
            <h2 className="inner-top-text">50+ Beautiful rooms<span> inspiration</span></h2>
            <p className="inner-uppor-text">Our designer already made a lot of beautiful<span>prototipe of rooms that
              inspire you</span></p>
            <div className="middle-button-section">
              <button type="button">Explore More</button>
            </div>
          </div>
          <div className="left-image-parent">
            <div className="left-image">
              <img src={img1} alt="" />
              <div className="left-image-child">
                <div className="left-image-child-text">
                  <p className="bed-room">01-Bed Room</p>
                  <p className="inner-peace">Inner Peace</p>
                  <div className="left-image-box">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="middle-image-parent">
            <div className="middle-image-image">
              <img src={img2} alt="" />
            </div>
            <div className="round-box">
              <div className="round">
                <div className="first-round"></div>
              </div>
              <div className="second-round"></div>
              <div className="second-round"></div>
              <div className="second-round"></div>
            </div>
          </div>
          <div className="right-image">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Rooms
