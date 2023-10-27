import React from 'react'
import Landing from '../landing/Landing';
import Success from '../success/Success';
import Footer from '../footer/Footer';
import "./Homestyle.css";
import Totc from '../totc/Totc';
import Features from '../features/Features';
import Testimonal from '../testimonal/Testimonal';
import ProductSlider from '../products/Products';
import Resource from '../../resource/Resource';
import Record from '../record/Record';

const Home = () => {
  return (
    <>
    <Landing/>
    {/* <Record/> */}
    <Success/>
    
    
    <Totc/>
    <Features/>
    <ProductSlider/>
    <Testimonal/> 
    <Resource/>
    <Footer/>
    </>
  )
}

export default Home