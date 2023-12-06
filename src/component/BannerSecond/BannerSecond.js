import React, { Component } from 'react'
import './BannerSecond.css';
import img1 from './images/Mask Group.png'
import img2 from './images/Image-living room.png'
import img3 from './images/Mask Group (1).png'
import SingleProduct from '../ShopProduct/SingleProduct';
import ShopItem from '../ShopProduct/shopItem';
import BannerFirst from '../BannerFirst/BannerFirst';
import Rooms from '../Rooms/Rooms';
import Galary from '../Galary/Galary';
import { NavLink } from 'react-router-dom';

export class BannerSecond extends Component {
    products = [
        {

            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        }
    ]
    constructor() {
        super()
        this.state = {
            product: this.products,
            selectedProduct: null, // Add this line
        };

    };

    handleViewDetails = (product) => {
        this.setState({
            selectedProduct: product,
        });
    };

    async componentDidMount() {
        const sendRequ = 'https://dummyjson.com/products';
        const callData = await fetch(sendRequ);
        const data = await callData.json();
        const products = data.products;
        this.setState({ product: products });
        console.log(data);
    }
    render() {
        const eightProducts = this.state.product.slice(0, 8);
        if (this.state.selectedProduct) {
            return (
                <>
                    <SingleProduct
                        handel={this.state.selectedProduct}
                    // Add any additional props you need for SingleProduct
                    />
                </>
            );
        }
        return (
            <>
                <BannerFirst />
                <div className='container image-section mx-auto'>
                    <div className="top-text">Browse The Range</div>
                    <p className="upper-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <div className="images-section">
                        <ul>
                            <div className="first-image">

                                <div className="first">
                                    <li><img src={img1} alt="" /></li>
                                </div>

                                <div className="text-image">
                                    Dining
                                </div>
                            </div>


                            <div className="first-image">

                                <div className="first">
                                    <li><img src={img2} alt="" /></li>
                                </div>

                                <div className="text-image">
                                    Living
                                </div>
                            </div>


                            <div className="first-image">

                                <div className="first">
                                    <li><img src={img3} alt="" /></li>
                                </div>

                                <div className="text-image">
                                    Bedroom
                                </div>
                            </div>

                        </ul>
                    </div>
                </div>
                <div className="container-xxl">
                    <div className="row mx-auto">
                        {eightProducts.map((element) => {
                            return (
                                <div className="col-md-3 col-12 mx-auto" key={element ? element.id : ""}>
                                    <ShopItem
                                        title={element.title ? element.title : ""}
                                        des={element.description ? element.category : ""}
                                        price={element ? element.price : ""}
                                        imageUrl={element.images[0] ? element.images[0] : ""}
                                        percent={element ? element.discountPercentage : ""}
                                        onViewDetails={() => this.handleViewDetails(element)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <NavLink to="/shop">
                        <div className="option">
                            <button type="button">Show More</button>
                       </div>
                    </NavLink>
                </div>
                <Rooms/> 
    <Galary/>
    </>
  )
    }
}
export default BannerSecond
