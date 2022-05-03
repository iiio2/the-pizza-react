import React from 'react';

const Pricing = () => {
  return (
    <div className='pricing'>
      <h1 className='text-center text-white'>PRICING</h1>
      <div className='pricing-detail'>
        <div className='pricing-one'>
          <h2>$100</h2>
          <h3>BALCONY</h3>
          <div className='underline'></div>
          <p className='lead text-white'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            beatae et vitae quos in nesciunt.
          </p>
          <a href='' className='btn btn-info'>
            PURCHASE
          </a>
        </div>
        <div className='pricing-two'>
          <h2>$150</h2>
          <h3>MEDIUM</h3>
          <div className='underline'></div>
          <p className='lead text-white'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            beatae et vitae quos in nesciunt.
          </p>
          <a href='' className='btn btn-info'>
            PURCHASE
          </a>
        </div>
        <div className='pricing-three'>
          <h2>$250</h2>
          <h3>STAR</h3>
          <div className='underline'></div>
          <p className='lead text-white'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            beatae et vitae quos in nesciunt.
          </p>
          <a href='' className='btn btn-info'>
            PURCHASE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
