import "./Cart.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CartImg from "./../../Components/img/f1.jpg";
import {AiOutlineMinus} from 'react-icons/ai';
import {GrAdd} from "react-icons/gr";

const Cart = () => {
  return (
    <>
      <Navbar/>
        <div className="cart_container">
            <span className="cart_title">YOUR BAG</span>

            <div className="cart_shopping_buttons">
                <div className="cart_button">
                  <button>Continue Shopping</button>
                </div>

                <div className="cart_spans">
                    <span>Shopping Bag (2)</span>
                    <span>Your Wishlist (2)</span>
                </div>

                <div className="cart_button" style={{textAlign:'right'}}>
                  <button>chekout now</button>
                </div>
            </div>

            <div className="cart_products">
                <div className="main_Cart_products">
                    <div className="prime_cart_product">
                        <div className="cart_product_img">
                            <img src={CartImg} alt="" />
                        </div>

                        <div className="cart_product_info">
                          <span><b>Product</b> : Colorful Shirt</span>
                          <span><b>Id</b> : 98757464</span>
                          <span><b>Size</b> : M</span>
                        </div>
                    </div>
          
                    <div className="prime_cart_product">
                        <div className="cart_product_img">
                            <img src={CartImg} alt="" />
                        </div>

                        <div className="cart_product_info">
                          <span><b>Product</b> : Colorful Shirt</span>
                          <span><b>Id</b> : 98757464</span>
                          <span><b>Size</b> : M</span>
                        </div>
                    </div>
                </div>
                {/* main_Cart_products */}

                <div className="marin_cart_prices">
                    <div className="prime_Cart_price">
                      <div className="cart_numbers">
                            <AiOutlineMinus style={{cursor:'pointer'}}/>
                            <span>0</span>
                            <GrAdd style={{cursor:'pointer'}}/>
                      </div>

                      <h5>$ 20 /-</h5>
                    </div>
                      
                     <div className="prime_Cart_price">
                      <div className="cart_numbers">
                            <AiOutlineMinus style={{cursor:'pointer'}}/>
                            <span>0</span>
                            <GrAdd style={{cursor:'pointer'}}/>
                      </div>

                      <h5>$ 20 /-</h5>
                    </div> 
                </div>

                

                <div className="main_cart_summary">
                    <span className="summary_title">Order summary</span>

                    <div className="prime_cart_summary_info">

                      <div className="subtotal">
                          <span>Subtotal</span>
                          <span>$80</span>
                      </div>

                      <div className="shipping">
                        <span>Estimated Shipping</span>
                        <span>$5.90</span>
                      </div>

                      <div className="ship_discount">
                        <span>Shipping Discount</span>
                        <span>$ -5.90</span>
                      </div>

                      <div className="total">
                        <span>Total</span>
                        <span>$ 80</span>
                      </div>

                      <button>Checkout now</button>

                    </div>
                </div>
            </div>
        </div>
      <Footer/>
    </>
  );
};

export default Cart;
