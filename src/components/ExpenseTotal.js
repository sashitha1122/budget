import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExpenseTotal = () => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await axios.get('https://localhost:7071/api/Expenses');
                const expenses = response.data;

                const totalAmount = expenses.reduce((sum, expense) => {
                    const amount = parseFloat(expense.amount);
                    return !isNaN(amount) ? sum + amount : sum;
                }, 0);

                setTotal(totalAmount);
            } catch (error) {
                console.error('Error fetching expenses:', error);
            }
        };

        fetchExpenses();
    }, []);

    return (
        <div className="d-flex justify-content-center">
            <div className="mt-3 alert alert-secondary" style={{ width: '1680px' }}>
                <span className="fs-4">Total Expenses: {total.toLocaleString()} LKR</span>
            </div>
        </div>
    );
};

export default ExpenseTotal;

