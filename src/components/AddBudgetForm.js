import React, { useContext } from 'react';
import { Form } from 'react-router-dom';

const AddBudgetForm = () => {
    return (
      <div className="">
           <div className="alert alert-success border-success" style={{ height: '340px',width: '600px' }} role="alert">
            <h2 className='text-center'>  Create Budget</h2>
            <Form method="post" class="">
               <div className="">
                <label className="fs-5" htmlFor="newBudget">Budget Name </label>
                <input type="text" class="form-control mt-3" name="newBudget" id="newBudget" placeholder="e.g., Groceries" required />
               </div>
               <div class="mt-3">
                <label className="fs-5" htmlFor="newBudgetAmount">Amount </label>
                <input type="number" class="form-control mt-3"  name="newBudgetAmount" id="newBudgetAmount" placeholder="e.g., 4000 LKR" required inputMode="decimal" />
               </div>
               <div className="mt-3">
               <button type="submit" className="btn btn-dark">Create Budget</button>   
               </div> 
            </Form>
          </div>
      </div>  
    );
};

export default AddBudgetForm;