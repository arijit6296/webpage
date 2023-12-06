import React, { Component } from 'react'

export class customCompare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProductDetails: null,
    };
  }

  // Function to receive selected product details
  handleAddToCart = (selectedProduct) => {
    this.setState({
      selectedProductDetails: selectedProduct,
    });
  };
  render() {
    return (
      <div>
        {/* Render SingleProduct and pass onAddToCart function */}
        <SingleProduct onAddToCart={this.handleAddToCart} />

        {/* Render SingleCart and pass selectedProductDetails as props */}
        {this.state.selectedProductDetails && (
          <SingleCart selectedProduct={this.state.selectedProductDetails} />
        )}
      </div>
    )
  }
}

export default customCompare

