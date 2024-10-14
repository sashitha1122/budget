import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import AddBudgetForm from '../components/AddBudgetForm';
import AddExpenseFrom from '../components/AddExpenseForm';

const Main = () => {

    const location = useLocation();
    const { name } = location.state || { name: '' };

    return (
        <div className=" mt-3 pages">
          <h1>Hii,Welcome <span className="text-primary">{name}</span></h1>
          <div className=" mt-3 d-flex justify-content-around">
              <div className="mt-3 ">
                <AddBudgetForm />
              </div>
              <div className="mt-3">
                <AddExpenseFrom />
              </div>
          </div>
        </div>
    );
};

export default Main;
