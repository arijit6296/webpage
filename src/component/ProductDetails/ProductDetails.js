import { useState } from 'react'
import './ProductDetails.css'
import photo from './images/Group 156.png'
import ProductBanner from '../ProductBanner/ProductBanner'
import ProductCompare from '../ProductCompare/ProductCompare'

function ProductDetails({compare}) {
    const storedCompare = localStorage.getItem("cart");
  const comparedProducts = storedCompare ? JSON.parse(storedCompare) : [];
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleProductChange = (event) => {
    const selectedProductName = event.target.value;
    const selectedProduct = comparedProducts.find(
      (product) => product.title === selectedProductName
      );
      setSelectedProduct(selectedProduct);
      console.log(selectedProduct)
  };
    return (
        <>
        <ProductBanner BannerTitle={"Product Comparison"} />
      <div className='container-xxl'>
      <div className="product-page">
        <div className="row">
            <div className="col-md-3">
                <p className="first-text">
                    Go to Product
                    <span>for more </span>
                    <span> Products</span>
                </p>
                <p className="view-more">view-more</p>
            </div>


            {comparedProducts.map((product, index) => (
              <div className="col-md-3" key={index}>
                <img className="comapare-img" src={product.images ? product.images[0] : ''} alt={`img${index + 1}`} />
                <p className="second-text">{product.title}</p>
                <p className="rupees">Rs. {product.price}</p>
              </div>
            ))}


            <div className="col-md-3">
                <p className="fourth-text">Add A Product</p>
                <div className="Product-box">
                <select onChange={handleProductChange}>
                  <option>Choose a Product</option>
                  {comparedProducts.map((product, index) => (
                    <option key={index}>{product.title}</option>
                  ))}
                </select>
                </div>
            </div>
        </div>
    </div>
      </div>
      <ProductCompare selectedProduct={selectedProduct} comparedProducts={comparedProducts} />
    </>
  )
}

export default ProductDetails
