import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget } = useContext(AppContext);
    return (
       <div className='alert alert-secondary'>
         <span className='fs-4'>Busget: {budget}.00 LKR</span>
       </div>
    );
};

export default Budget;