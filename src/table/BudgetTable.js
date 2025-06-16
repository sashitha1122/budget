// BudgetTable.js
import React, { useState,useEffect } from "react";
import Data from '../Data.json';
import { TrashIcon } from '@heroicons/react/16/solid';
import AddBudgetForm from "../components/AddBudgetForm";  // Import the form component

const BudgetTable = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const handleClickOpen = () => {
    setOpen(!open);
  }

  const handleClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    fetch('https://localhost:7071/api/Budget')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Error", err));
  }, []);

  return (
    <div className='d-flex justify-content-center alert alert-light border-black' style={{ width: '750px' }}>
      <div className='' style={{ width: '700px' }}>
        <div className="d-flex justify-content-between">
          <h2 className="text-primary" style={{ fontStyle: 'italic' }}>Budget</h2>
          <button onClick={handleClickOpen} className="fs-6 btn btn-outline-primary justify-content-center" style={{ fontStyle: 'italic' }}>Create Budget</button>
        </div>
        <div className="mt-3 border border-secondary p-4 rounded">
          <table className="table table-hover table-striped">
            <thead className="fs-6 text-center">
              <tr>
                <th>ID</th>
                <th>Name</th>
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

      {/* Modal for AddBudgetForm */}
      {open && (
        <div className="modal" style={{ display: 'block', position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', zIndex: '1050', backgroundColor: 'rgba(0,0,0,0.5)' }} >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Budget</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BudgetTable;
