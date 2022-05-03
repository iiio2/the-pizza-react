import React from 'react';
import Slider from 'react-slick';
import CountDown from './countDown';
import pizza1 from '../img/pizza1.jpg';
import pizza2 from '../img/pizza2.jpg';
import pizza3 from '../img/pizza3.jpg';
import pizza4 from '../img/pizza4.jpg';
import pizza5 from '../img/pizza5.jpg';

const Hero = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className='hero'>
      <Slider {...settings}>
        <img src={pizza1} alt='pizza 1' className='img-1' />

        <img src={pizza2} alt='pizza 2' className='img-2' />

        <img src={pizza3} alt='pizza 3' className='img-3' />

        <img src={pizza4} alt='pizza 4' className='img-4' />

        <img src={pizza5} alt='pizza 5' className='img-5' />
      </Slider>
      <CountDown date={Date.now() + 10000} />
    </div>
  );
};

export default Hero;
