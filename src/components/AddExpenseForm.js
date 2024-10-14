import React from "react";
import { Form } from "react-router-dom";

const AddExpenseFrom = () => {

    return (

        <div className="alert alert-primary border-primary" style={{ height: '340px', width:'600px' }} role="alert">
           <h2 className='text-center'>Create New Expense</h2>
            <Form method="post" class="">
            <div className="">
                <label className="fs-5" htmlFor="newBudget">Expense Name </label>
                <input type="text" class="form-control mt-3" name="newBudget" id="newBudget" placeholder="e.g., Groceries" required />
            </div>
            <div className="mt-3">
                <label className="fs-5" htmlFor="newBudgetAmount">Amount </label>
                <input type="number" class="form-control mt-3"  name="newBudgetAmount" id="newBudgetAmount" placeholder="e.g., 4000 LKR" required inputMode="decimal" />
            </div>
            <div className="mt-3">
            <button type="submit" className="btn btn-dark">Add Expense</button>   
            </div> 
            </Form>
      </div>
    );
};

export default AddExpenseFrom;