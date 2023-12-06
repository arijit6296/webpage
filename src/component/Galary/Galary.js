import React from 'react'
import './Galary.css'
import img1 from './images/Rectangle 36.png'
import img2 from './images/Rectangle 37.png'
import img3 from './images/Rectangle 38.png'
import img4 from './images/Rectangle 39.png'
import img5 from './images/Rectangle 40.png'
import img6 from './images/Rectangle 41.png'
import img7 from './images/Rectangle 43.png'
import img8 from './images/Rectangle 44.png'
import img9 from './images/Rectangle 45.png'
function Galary() {
  return (
    <>
      <div className='container-xxl my-4'>
      <div className="wrap">

<div className="wrap-text">
    <p className="top-wrap-text">Share your setup with</p>
    <div className="upper-wrap-text">#FuniroFurniture</div>
</div>

<div className="container-xxl galary">
    <div className="row align-item-center mx-auto ">
        <div className="col-md-4">
            <div className="rows">
                <div className="left-top-first-img">
                    <img src={img1} alt=""/>
                </div>
                <div className="left-top-second-img">
                    <img src={img3} alt=""/>
                </div>
            </div>
            <div className="rows">
                <div className="left-bottom-first-img">
                    <img src={img2} alt=""/>
                </div>
                <div className="left-bottom-second-img">
                    <img src={img4} alt=""/>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="middle-img">
                <img src={img5} alt=""/>
            </div>
        </div>
        <div className="col-md-4">
            <div className="rows">
                <div className="right-top-first-img">
                    <img src={img7} alt=""/>
                </div>
                <div className="right-top-second-img">
                    <img src={img9} alt=""/>
                </div>
            </div>
            <div className="rows">
                <div className="right-bottom-first-img">
                    <img src={img6} alt=""/>
                </div>
                <div className="right-bottom-second-img">
                    <img src={img8} alt=""/>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
    </>
  )
}

export default Galary
