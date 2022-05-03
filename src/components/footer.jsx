import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-text'>
        <h2>The Pizza</h2>
        <p> &copy; {new Date().getFullYear()} All Rights Reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
