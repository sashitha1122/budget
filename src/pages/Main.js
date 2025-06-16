import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import AddBudgetForm from '../components/AddBudgetForm';
import AddExpenseFrom from '../components/AddExpenseForm';
import ExpenseList from '../components/ExpenseList';
import Remaining from '../components/Remaining';
import ExpenseTotal from '../components/ExpenseTotal';
import Budget from '../components/Budget';
import BudgetTable from '../table/BudgetTable';
import ExpenseTable from '../table/Expensetable';

const Main = () => {

  const location = useLocation();
  const { name } = location.state || { name: '' };

  return (
    <div className="mt-3 pages p-3">
      <h1 className="text-center">Hii, Welcome <span className="text-primary">{name}</span></h1>
      <div className="mt-3 d-flex justify-content-around">
        <div className="mt-3 ">
          <BudgetTable />
        </div>
        <div className="mt-3">
          <ExpenseTable />
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column mx-auto">
        <div className="mt-3">
          <Budget />
        </div>
        <div className="mt-3">
          <ExpenseTotal />
        </div>
        <div className="mt-3">
          <Remaining />
        </div>
      </div>

      <div className="mt-3 d-flex align-items-center justify-content-center">
        <ExpenseList />
      </div>
    </div>
  );
};

export default Main;
