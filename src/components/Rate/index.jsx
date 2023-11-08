// import './style.css';

// const currencies = {
//   USD: { CZK: 23.823 },
//   EUR: { CZK: 24.74 },
//   GBP: { CZK: 29.067 },
// };

// export const Rate = ({from}) => {
//   return (
//     <div className="rate">
//       <div className="rate__currency">{from}</div>
//       <div>=</div>
//       <div className="rate__value">22 CZK</div>
//     </div>
//   );
// };
import React from 'react';

export const Rate = ({ from }) => {
  const currencies = {
    USD: { CZK: 23.823 },
    EUR: { CZK: 24.74 },
    GBP: { CZK: 29.067 },
  };

  const rate = currencies[from]?.CZK;

  return (
    <div className="rate">
      <div className="rate__currency">{from}</div>
      <div>=</div>
      <div className="rate__value">{rate} CZK</div>
    </div>
  );
};
