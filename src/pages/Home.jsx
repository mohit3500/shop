import React from 'react';
import Navbar from '../components/Navbar';
import VideoBg from '../components/VideoBg';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Brands from '../components/Brands';
import Discount from '../components/Discount';
import SellingCarousel from '../components/SellingCarousel';
import Poster from '../components/Poster';
import Products from '../components/Products';
import Service from '../components/Service';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <VideoBg />
      <Categories />
      <Carousel />
      <Brands />
      <Discount />
      <SellingCarousel />
      <Poster />
      <Products />
      <Service />
      <Footer />
    </>
  );
};

export default Home;
