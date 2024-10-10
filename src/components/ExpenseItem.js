import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';


const ExpenseItem = (props) => {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
           {props.name}
           <div>
           <span className='badge bg-primary rounded-pill me-3 fs-6'>
                {props.cost}.00
            </span>
            <TiDelete size='1.6em' onClick={handleDeleteExpense}></TiDelete>
           </div>
        </li>
    );
};

export default ExpenseItem;