import React, { Component } from "react";
import "./ShopProduct.css";
export class ShopItem extends Component {
    
  render() {
    const {title , des , imageUrl, price , percent, onViewDetails } = this.props;
    return (
      <>
        <div className="top-card">
          <div className="card-wraper">
            <div className="first-card">
              <div className="first-image">
                <img className="mb-100" src={imageUrl} alt="" />
                <div className="red">
                  <p className="parsentage">{percent}%</p>
                </div>
                <div className="text-box">
                  <h3 className="name">{title}</h3>
                  <p className="inner-name">{des}</p>
                  <h3 className="rupees">
                    Rp {price}
                  </h3>
                </div>
              </div>
            </div>
            <div className="hover-card">
              <div className="hover">
                <div className="hover-button-section">
                  <button type="button" onClick={onViewDetails}>
                  View Details
                  </button>
                </div>
                <ul className="product-hover-content">
                  <li>
                    <a href="/">
                      {" "}
                      <i className="fa fa-share-alt" aria-hidden="true"></i>
                      Share
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-compress" aria-hidden="true"></i>
                      Compare
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-heart-o" aria-hidden="true"></i>Like
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
      </>
    );
  }
}

export default ShopItem;
