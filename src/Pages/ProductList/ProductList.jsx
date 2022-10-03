import Navbar from "../../Components/Navbar/Navbar";
import Products from "../../Components/Products/Products";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";
import "./ProductList.css"
const ProductList = () => {
  return (
    <>
      <Navbar/>
      <div className="product_inputs" style={{width:'100%', display:'flex', justifyContent:'space-between',padding:'20px 20px 0px 20px'}}>
        <div className="product_filter">
            <span>Filter : </span>

            <select className="product_f_select" name="" id="" style={{marginRight:'10px'}}>
                <option value="" disabled selected>Color</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="blue">Blue</option>
                <option value="white">White</option>
            </select>

            <select name="" id="">
                <option value="" disabled selected>Size</option>
                <option value="xsm">XSM</option>
                <option value="sm">SM</option>
                <option value="md">MD</option>
                <option value="lg">LG</option>
                <option value="xl">XL</option>
            </select>
        </div>

        <div className="product_sort">
            <span>Sort : </span>

            <select name="" id="">
                <option value="" disabled selected>Sort</option>
                <option value="asc">Ascending</option>
                <option value="des">Descending</option>
            </select>
        </div>
      </div>
      <Products/>
      <Newsletter/>
      <Footer/>
    </>
  );
};

export default ProductList;
