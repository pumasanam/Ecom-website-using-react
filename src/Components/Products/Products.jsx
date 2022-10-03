import ProductDetails from "./ProductsData";
import "./Products.css";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
const Products = () => {
  return (
    <>
      <div className="productDetails">
            {ProductDetails.map((item)=>{
                return(
                    <>
                        <div className="productDetail" key={item.id}>
                            <img src={item.img} alt="" />

                            <div className="product_icons">
                                <div className="p_icos">
                                        <AiOutlineShoppingCart/>
                                </div>

                                <div className="p_icos">
                                        <AiOutlineSearch/>
                                </div>

                                <div className="p_icos">
                                        <AiOutlineHeart/>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
      </div>
    </>
  );
};

export default Products;
