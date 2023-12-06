import React, { useState, useEffect } from "react";
import "./SingleCart.css";
import ProductBanner from "../ProductBanner/ProductBanner";
import FooterSelection from "../FooterSelection/FooterSelection";
import CheckOut from "../CheckOut/CheckOut";

function SingleCart({ cartItems, updateCartItems }) {
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [check, setCheck] = useState(null);
  const [allProduct, setAllProduct] = useState(null);

  useEffect(() => {
    const totalAmount = cartItems.reduce((total, item) => total + item.totalPrice, 0);
    setSubtotal(totalAmount);
    setTotal(totalAmount);
  }, [cartItems]);

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateCartItems(updatedCart);
  };

  function checkOut(cartItems) {
    setAllProduct(cartItems);
    setCheck({ subtotal, total, allProduct });
  }

  if (check) {
    return (
      <>
        {check && (
          <CheckOut checkOut={check} />
        )}
      </>
    );
  }
  return (
    <>
      <ProductBanner BannerTitle={"Cart"} />
      <div className="container-xxl mt-3">
        <div className="div">
          <div className="div-2">
            <div className="column">
              <div className="div-3">
                <div className="div-4">
                  <div className="div-5">
                    <div className="div-6">
                      <div className="div-7">Product</div>
                      <div className="div-8">Price</div>
                    </div>
                    <div className="div-9">
                      <div className="div-10">Quantity</div>
                      <div className="div-11">Subtotal</div>
                    </div>
                  </div>
                </div>
                {cartItems &&
                  cartItems.length > 0 &&
                  cartItems.map((item, index) => (
                    <div className="div-12" key={index}>
                      <div className="div-13">
                        <div className="column-2">
                          <div className="div-14">
                            <div className="div-15">
                              <div className="column-3">
                                <img
                                  loading="lazy"
                                  srcSet={item.images[0]}
                                  className="img"
                                  alt={item.title}
                                />
                              </div>
                              <div className="column-4">
                                <div className="div-16">{item.title}</div>
                              </div>
                              <div className="column-5">
                                <div className="div-17">Rs. {item.price}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="column-6">
                          <div className="div-18">
                            <p className="div-19">
                              {item.quantity}
                            </p>
                            <div className="div-20">Rs. {item.price * item.quantity}</div>

                            <button
                              onClick={() => removeFromCart(item)}
                              type="button"
                              className="btn"
                            >
                              <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20.625 4H17.125V1.8125C17.125 0.847266 16.3402 0.0625 15.375 0.0625H6.625C5.65977 0.0625 4.875 0.847266 4.875 1.8125V4H1.375C0.891016 4 0.5 4.39102 0.5 4.875V5.75C0.5 5.87031 0.598437 5.96875 0.71875 5.96875H2.37031L3.0457 20.2695C3.08945 21.202 3.86055 21.9375 4.79297 21.9375H17.207C18.1422 21.9375 18.9105 21.2047 18.9543 20.2695L19.6297 5.96875H21.2812C21.4016 5.96875 21.5 5.87031 21.5 5.75V4.875C21.5 4.39102 21.109 4 20.625 4ZM15.1562 4H6.84375V2.03125H15.1562V4Z"
                                  fill="#B88E2F"
                                />
                              </svg>
                            </button>
                            {/* You can add an image here if needed */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="column-7">
              <div className="div-21">
                <div className="div-22">Cart Totals</div>
                <div className="div-23">
                  <div className="div-24">
                    <div className="div-25">Subtotal</div>
                    <div className="div-26">Total</div>
                  </div>
                  <div className="div-27">
                    <div className="div-28">Rs. {subtotal}</div>
                    <div className="div-29">Rs. {total}</div>
                  </div>
                </div>
                <button className="div-30" onClick={() => checkOut(cartItems)}>Check Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSelection />
    </>
  );
}

export default SingleCart;
