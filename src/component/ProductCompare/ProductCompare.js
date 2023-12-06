import React from 'react'
import './ProductCompare.css'

function ProductCompare({ selectedProduct, comparedProducts }) {
    const productsToDisplay = selectedProduct  ? [selectedProduct] : comparedProducts;
    console.log(selectedProduct)

    if (!selectedProduct) {
        return (
            <h3 className='text-center'>No Compare Product... Please Select Your Product</h3>
        )
        
    } else {
        return (
            <>
                <div className='container-xxl'>
                    <div className="product-details">
                        {productsToDisplay.map((product, index) => (
                            <div className="row">

                                <div className="col-md-4 col-sm-12">
                                    <div className="first">
                                        <div className="first-text" key={index}>
                                            <p className="genarel">General</p>
                                            <ul>
                                                <li>Sales Package</li>
                                                <li>Model Number</li>
                                                <li>Secondary Material</li>
                                                <li>Configuration</li>
                                                <li>Upholstery Material</li>
                                                <li>Upholstery Color</li>
                                            </ul>
                                        </div>

                                        <div className="second-text">
                                            <p className="genarel">Product </p>
                                            <ul>
                                                <li>Filling Material</li>
                                                <li>Finish Type</li>
                                                <li>Adjustable Headrest</li>
                                                <li>Maximum Load Capacity</li>
                                                <li>Origin of Manufacture</li>
                                            </ul>
                                        </div>

                                        <div className="third-text">
                                            <p className="genarel">Dimensions </p>
                                            <ul>
                                                <li>Width</li>
                                                <li>Height</li>
                                                <li>Depth</li>
                                                <li>Weight</li>
                                                <li>Seat Height</li>
                                                <li>Leg Height</li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-4 col-sm-12">

                                    <div className="second">
                                        <div className="first-text">

                                            <ul>
                                                <li>1 sectional sofa</li>
                                                <li>{product.description}</li>
                                                <li>Solid Wood</li>
                                                <li>L-shaped</li>
                                                <li>Fabric + Cotton</li>
                                                <li>Bright Grey & Lion</li>
                                            </ul>
                                        </div>


                                        <div className="second-text">

                                            <ul>
                                                <li>Foam</li>
                                                <li>Bright Grey & Lion</li>
                                                <li>No</li>
                                                <li>280 KG</li>
                                                <li>India</li>
                                            </ul>
                                        </div>

                                        <div className="third-text">

                                            <ul>
                                                <li>265.32 cm</li>
                                                <li>76 cm</li>
                                                <li>167.76 cm</li>
                                                <li>45 KG</li>
                                                <li>41.52 cm</li>
                                                <li>5.46 cm</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>


                                <div className="col-md-4 col-sm-12">

                                    <div className="third">
                                        <div className="first-text">

                                            <ul>
                                                <li>1 Three Seater, 2 Single Seater</li>
                                                <li>DTUBLIGRBL568</li>
                                                <li>Solid Wood</li>
                                                <li>L-shaped</li>
                                                <li>Fabric + Cotton</li>
                                                <li>Bright Grey & Lion</li>
                                            </ul>
                                        </div>


                                        <div className="second-text">

                                            <ul>
                                                <li>Matte</li>
                                                <li>Bright Grey & Lion</li>
                                                <li>yes</li>
                                                <li>300 KG</li>
                                                <li>India</li>
                                            </ul>
                                        </div>

                                        <div className="third-text">

                                            <ul>
                                                <li>265.32 cm</li>
                                                <li>76 cm</li>
                                                <li>167.76 cm</li>
                                                <li>65 KG</li>
                                                <li>41.52 cm</li>
                                                <li>5.46 cm</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>


                    <div className="product-warranty">
                        <div className="row">
                            <div className="col-md-12">

                                <div className="first">

                                    <ul>
                                        <li><h1 className="warranty">Warranty</h1></li>
                                    </ul>

                                    <ul>
                                        <li><p>Warranty Summary</p></li>
                                        <li><p>1 Year Manufacturing Warranty</p></li>
                                        <li><p>1.2 Year Manufacturing Warranty</p></li>
                                    </ul>


                                    <ul>
                                        <li><p>Warranty Service
                                            Type</p></li>
                                        <li><p>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</p></li>
                                        <li><p>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</p></li>
                                    </ul>


                                    <ul>
                                        <li><p>Covered in Warranty</p></li>
                                        <li><p>Warranty Against Manufacturing Defect</p></li>
                                        <li><p>Warranty of the product is limited to manufacturing defects only.</p></li>
                                    </ul>


                                    <ul>
                                        <li><p>Not Covered in Warranty</p></li>
                                        <li><p>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p></li>
                                        <li><p>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p></li>
                                    </ul>


                                    <ul>
                                        <li><p>Domestic Warranty</p></li>
                                        <li><p>1 Year</p></li>
                                        <li><p>3 Months</p></li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductCompare
