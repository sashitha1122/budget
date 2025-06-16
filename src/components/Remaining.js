import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Remaining = () => {
    const [totalBudget, setTotalBudget] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);

    useEffect(() => {
        // Fetch Budget Total
        const fetchBudget = async () => {
            try {
                const response = await axios.get("https://localhost:7071/api/Budget");
                const budgets = response.data;

                const total = budgets.reduce((sum, item) => {
                    const amount = parseFloat(item.amount);
                    return !isNaN(amount) ? sum + amount : sum;
                }, 0);
                setTotalBudget(total);
            } catch (error) {
                console.error("Error fetching budgets:", error);
            }
        };

        // Fetch Expense Total
        const fetchExpenses = async () => {
            try {
                const response = await axios.get("https://localhost:7071/api/Expenses");
                const expenses = response.data;

                const total = expenses.reduce((sum, item) => {
                    const amount = parseFloat(item.amount);
                    return !isNaN(amount) ? sum + amount : sum;
                }, 0);
                setTotalExpense(total);
            } catch (error) {
                console.error("Error fetching expenses:", error);
            }
        };

        fetchBudget();
        fetchExpenses();
    }, []);

    const remaining = totalBudget - totalExpense;

    return (
        <div className="d-flex justify-content-center">
            <div className="mt-3 alert alert-danger" style={{ width: '1680px' }}>
                <span className="fs-4">
                    Remaining: {remaining.toLocaleString()}.00 LKR
                </span>
            </div>
        </div>
    );
};

export default Remaining;
