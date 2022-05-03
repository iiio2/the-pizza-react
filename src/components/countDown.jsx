import React from 'react';
import Countdown from 'react-countdown';

const CountDown = () => {
  const renderer = ({ hours, minutes, seconds, completed, daysInHours }) => {
    if (completed) {
      // Render a completed state
      return 'BOOM';
    } else {
      // Render a countdown
      return (
        <span>
          {hours}H :{minutes}M : {seconds}S
        </span>
      );
    }
  };

  return (
    <div className='countdown'>
      <Countdown date={Date.now() + 99000000000} renderer={renderer} />,
    </div>
  );
};

export default CountDown;
