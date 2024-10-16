import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import AddBudgetForm from '../components/AddBudgetForm';
import AddExpenseFrom from '../components/AddExpenseForm';
import ExpenseList from '../components/ExpenseList';
import Remaining from '../components/Remaining';

const Main = () => {

    const location = useLocation();
    const { name } = location.state || { name: '' };

    return (
        <div className=" mt-3 pages">
          <h1 className="text-center">Hii,Welcome <span className="text-primary">{name}</span></h1>
          <div className=" mt-3 d-flex justify-content-around">
              <div className="mt-3 ">
                <AddBudgetForm />
              </div>
              <div className="mt-3">
                <AddExpenseFrom />
              </div>
          </div>
          <div className="mt-3">
             <Remaining />
          </div>
          <div className="mt-3 pt-3 d-flex justify-content-center">
                <ExpenseList />
              </div>
        </div>
    );
};

export default Main;
