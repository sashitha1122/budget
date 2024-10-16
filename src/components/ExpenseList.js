import React from 'react';
import Data from '../Data.json';
import { TrashIcon } from '@heroicons/react/16/solid';

const ExpenseList = () => {

    return (
     <div>
        <div className="mt-3">
            <h1 className="mx-3 mt-3">Recent Expenses</h1>
        </div>
        <div className="mt-3 pt-3 border border-secondary d-flex justify-content-center" style={{width: '1390px' }}>
        <table className="table" style={{width: '1300px' }}>
            <thead className="fs-5" >
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Action</th>
            </thead>
            <tbody className="fs-5">
                    {Data.map((d,i)=> (
                      <tr key={i}>
                        <td>{d.name}</td>
                        <td>{d.cost}.00</td>
                        <td>{d.Data}</td>
                        <td>
                            <button type="submit" className="btn btn-outline-danger">
                                <TrashIcon width={18}/>
                            </button>
                        </td>
                      </tr>
                ))}
            </tbody>
        </table>
     </div>
     </div>
    );
};

export default ExpenseList;