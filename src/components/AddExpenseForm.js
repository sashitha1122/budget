import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-router-dom";

const AddExpenseFrom = () => {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("https://localhost:7071/api/Expenses", {
                name,
                amount: amount.toString(), 
                date: new Date().toISOString()
            });

            alert("Expense is created!");
            setName("");
            setAmount("");
        } catch (err) {
            alert("Faild to create expense");
            console.error(err);
        }
    };

    return (

        <div className="alert alert-success border-success" role="alert">
            <h2 className='text-center'>Create New Expense</h2>
            <Form method="post" class="" onSubmit={handleSubmit}>
                <div className="">
                    <label className="fs-5" htmlFor="newBudget">Expense Name </label>
                    <input type="text" class="form-control mt-3" name="newBudget" id="newBudget" placeholder="e.g., Groceries" required onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mt-3">
                    <label className="fs-5" htmlFor="newBudgetAmount">Amount </label>
                    <input type="number" class="form-control mt-3" name="newBudgetAmount" id="newBudgetAmount" placeholder="e.g., 4000 LKR" required inputMode="decimal" onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className="mt-3">
                    <button type="submit" className="btn btn-dark">Add Expense</button>
                </div>
            </Form>
        </div>
    );
};

export default AddExpenseFrom;