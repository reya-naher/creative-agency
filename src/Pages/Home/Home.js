import React from 'react';
import Feedbacks from '../../Components/Feedbacks/Feedbacks';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import LogoGroup from '../../Components/LogoGroup/LogoGroup';
import Services from '../../Components/Services/Services';
import Works from '../../Components/Works/Works';

const Home = () => {
  return (
    <>
      <Header></Header>
      <LogoGroup></LogoGroup>
      <Services></Services>
      <Works></Works>
      <Feedbacks></Feedbacks>
      <Footer></Footer>
    </>
  );
};

export default Home;