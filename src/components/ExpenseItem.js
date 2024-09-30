import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

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