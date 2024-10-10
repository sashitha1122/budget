import React, { useContext } from 'react';

const ExpenseTotal = () => {
    return (
        <div className='alert alert-primary'>
           <span className='fs-4'>Spent so far:{totalExpenses}.00 LKR</span>
        </div>
    );
};

export default ExpenseTotal;