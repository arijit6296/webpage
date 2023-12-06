import React from 'react'
import './ShopBannerBottom.css'
function ShopBotton(props) {
  
  return (
    <>
      <div className="container-xxl">
      <div className="shop-middle-section">
        <div className="row">

            <div className="col-6">
                <div className="filter">
                    <div className="icon-option">
                        <div className="filter-icon"><i className="fa fa-sliders" aria-hidden="true"></i></div>
                        <h4 className="filter-text">Filter</h4>
                        <div className="grid-big-round"><i className="fa fa-th-large" aria-hidden="true"></i></div>
                        <div className="view-list"><i className="fa fa-square-o" aria-hidden="true"></i></div>
                    </div>
                    <p className="group">{`Showing ${props.lenth} of ${props.totla} results`}</p>
                </div>
            </div>



            <div className="col-md-6 col-11">
                <div className="dropdown">

                    <div className="first-dropdown">
                        <h4 className="show-text">Show</h4>
                        <div className="rectangel-first-box">
                            <select>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                            </select>
                        </div>
                    </div>

                    <div className="second-dropdown">
                        <h4 className="Short-by-text">Short by</h4>
                        <div className="rectangel-second-box">
                            <select>
                                <option>Default</option>
                                <option>Custom</option>
                            </select>
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

export default ShopBotton

