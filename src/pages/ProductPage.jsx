import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryProduct from '../components/CategoryProduct';
import BannerProduct from '../components/BannerProduct';

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[64px]">
        <BannerProduct />
        <CategoryProduct />
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
