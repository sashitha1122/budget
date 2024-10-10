import React, { useContext } from 'react';

const Remaining = () => {
    return (
      <div className={`alert ${alertType} `}>
         <span className="fs-4">Remaining:{budget - totalExpenses}.00 LKR</span>
      </div>
    );
};

export default Remaining;