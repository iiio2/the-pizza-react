import React from 'react';

const Highlights = () => {
  return (
    <div className='highlights'>
      <h1 className='text-center mb-5'>HIGHLIGHTS</h1>
      <div className='underline'></div>
      <div className='highlights-text mt-2'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusamus
          reprehenderit consequuntur delectus rerum eligendi. A, quis eum?
          Saepe, earum nisi? Assumenda, vero dolorum nemo temporibus recusandae
          illum reiciendis unde! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Accusamus deleniti deserunt, harum, assumenda
          eveniet numquam optio, omnis quis neque sunt cumque eos corporis ut
          fuga quo provident? Et, rem porro.
        </p>
      </div>
      <div className='underline'></div>

      <div className='price-zone'>
        <div className='discount-price'>
          <div className='percentage'>30%</div>
          <h2>OFF</h2>
        </div>
        <div className='price-text'>
          <h2>Purchase Tickets before 20 June</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            autem ex sed iste blanditiis nihil eos exercitationem tempore
            laborum adipisci. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ipsam veniam temporibus doloribus? Similique, doloribus
            expedita.
          </p>
          <div>
            <a href='#' className='btn btn-info price-btn'>
              Purchse Tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
