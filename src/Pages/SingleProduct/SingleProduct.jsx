import "./SingleProduct.css";
import Navbar from "../../Components/Navbar/Navbar";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";
import {AiOutlineMinus} from 'react-icons/ai';
import {GrFormAdd} from 'react-icons/gr';
import ProductImg from './../../Components/img/f1.jpg'

const SingleProduct = () => {
  return (
    <>
      <Navbar/>

      <div className="singleProduct">
        <div className="singleproduct_img">
                <img src={ProductImg} alt="" />
        </div>

        <div className="singleproduct_info">
            <span className="singleproduct_title">Colorful Shirt</span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, alias deleniti? Placeat eaque, sit rerum sapiente voluptates tenetur fugit saepe nemo ab nulla expedita dolor ut illo tempore sed blanditiis molestias quo sunt repellendus officia veritatis, vel deleniti natus possimus?</p>
            <h6>$ 20</h6>

            <div className="singleprodcut_selects">
                <div className="singleprodcut_select">
                    <span>Color </span>

                    <div className="singleproduct_colors" >
                        <option value="red"></option>
                        <option value="orange" style={{backgroundColor:'orange'}}></option>
                        <option value="blue" style={{backgroundColor:'blue'}}></option>
                        <option value="gray" style={{backgroundColor:'gray'}}></option>
                    </div>
                </div>

                <div className="singleproduct_select">
                    <span>Size </span>
                    <select name="" id="">
                        <option value="xsm">XSM</option>
                        <option value="sm">SM</option>
                        <option value="md">MD</option>
                        <option value="lg">LG</option>
                        <option value="xl">XL</option>
                    </select>
                </div>   
            </div>

            <div className="singleProduct_cart">
                <div className="singleproduct_numbers">
                        <AiOutlineMinus style={{fontSize:'1.5rem', cursor:'pointer'}}/>
                        <span>1</span>
                        <GrFormAdd style={{fontSize:'1.5rem', cursor:'pointer'}}/>
                </div>

                <div className="product_Cart">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
      </div>

      <Newsletter/>
      <Footer/>
    </>
  );
};

export default SingleProduct;
