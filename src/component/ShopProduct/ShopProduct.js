import './ShopProduct.css'
import React, { Component } from 'react'
import ShopItem from './shopItem'
import SingleProduct from './SingleProduct'
import Btn from './Btn'
import ShopBotton from '../ShopBannerBottom/ShopBannerBottom'
import ProductBanner from '../ProductBanner/ProductBanner'
export class ShopProduct extends Component {
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
            total:1,
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
        const products = data.products ;
        const total = data.total
        this.setState({ product: products , total: total});
        console.log(data);
    }
    render() {
        if (this.state.selectedProduct) {
            return (
              <SingleProduct
                handel={this.state.selectedProduct}
              />
            );
          }
        return (
            <div>
              <ProductBanner BannerTitle={'Shop'}/>
                <ShopBotton lenth={this.state.product.length} totla={this.state.total}/>
                <div className="container-xxl">
                    <div className="row mx-auto">
                        {this.state.product.map((element, index) => {
                            return <div className="col-md-3 col-12 mx-auto" key={element ? element.id : ""}>
                                <ShopItem title={element.title ? element.title : ""} des={element.description ? element.category : ""} price={element ? element.price : ""} imageUrl={element.images[0] ? element.images[0] : ""} percent={element ? element.discountPercentage :""} onViewDetails={() => this.handleViewDetails(element)}/>
                            </div>
                        })}
                    </div>
                </div>
                <Btn/>
            </div>
        )
    }
}

export default ShopProduct
