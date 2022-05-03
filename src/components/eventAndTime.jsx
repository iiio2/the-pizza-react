import React from 'react';

const EventAndTime = () => {
  return (
    <div className='events'>
      <div className='event'>
        <div className='event-info'>
          <h4>Event Date & Time</h4>
          <div className='underline'></div>
          <h3>7 August, 2021</h3>
          <h3>@10.00 PM</h3>
        </div>
      </div>
      <div className='location'>
        <div className='location-info'>
          <h4>Event Location</h4>
          <div className='underline'></div>
          <h3>345 Speer Street</h3>
          <h3>Oakland, CA 9835</h3>
        </div>
      </div>
    </div>
  );
};

export default EventAndTime;
