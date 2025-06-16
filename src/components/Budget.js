import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Budget = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchBudgets = async () => {
      try{
        const response = await axios.get("https://localhost:7071/api/Budget");
        const budgets = response.data;

        const totalAmount = budgets.reduce((sum, budget) => {
          const amount = parseFloat(budget.amount);
          return !isNaN(amount) ? sum + amount : sum;
      }, 0);

      setTotal(totalAmount);
      } catch (error) {
        console.error('Error fetching budgets:', error);
      }
    };
    fetchBudgets();
  }, []);

    return (
        <div className="d-flex justify-content-center">
            <div className="mt-3 alert alert-warning " style={{width: '1680px'}}>
              <div className="d-flex justify-content-between">
              <span className="fs-4">Total Budgets :{total.toLocaleString()}.00LKR</span>
               
              </div>
            </div>
      </div>
    );
};

export default Budget;