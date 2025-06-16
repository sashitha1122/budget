import React, { useEffect, useState } from 'react';
import Data from '../Data.json';
import { TrashIcon } from '@heroicons/react/16/solid';

const ExpenseList = () => {

  const [users, setUsers] = useState([]);

  useEffect( () => {
    fetch('https://localhost:7071/api/Expenses')
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.error("Error",err));
  },[]);

  return (
    <div className='d-flex justify-content-center align-items-center'style={{width: '1680px'}}>
      <div className='w-100'>
        <div className="">
          <h1 className="text-center ">Recent Expenses</h1>
        </div>
        <div className="mt-3 border border-secondary p-4 rounded">
          <table className="table table-hover table-striped">
            <thead className="fs-6 text-center">
              <tr>
                <th>ID</th>
                <th>Name </th>
                <th>Amount</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="fs-6 text-center">
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.amount}.00</td>
                  <td>{user.date}</td>
                  <td>
                    <button type="button" className="btn btn-outline-danger btn-sm">
                      <TrashIcon width={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
