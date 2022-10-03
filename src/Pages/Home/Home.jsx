import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Annoucement from '../../Components/Annoucement/Annoucement';
import Slider from '../../Components/Slider/Slider';
import Products from '../../Components/Products/Products';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Footer from '../../Components/Footer/Footer';
const Home = () => {
  return (
    <>
      <Annoucement/>
      <Navbar/>
      <Slider/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </>
  );
};

export default Home;
