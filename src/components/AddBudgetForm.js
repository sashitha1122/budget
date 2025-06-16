import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Form } from 'react-router-dom';

const AddBudgetForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://localhost:7071/api/budget", {
        name,
        amount: parseFloat(amount)
      });
        alert("Budget created!");
        setName("");
        setAmount("");
    } catch (err) {
      alert("Failed to created budget")
      console.error(err);
    }
  };

  return (
    <div class="">
      <div class="alert alert-primary border-primary">
        <h2 class='text-center'>  Create Budget</h2>
        <Form method="post" class="" onSubmit={handleSubmit}>
          <div class="">
            <label class="fs-5" htmlFor="newBudget">Budget Name </label>
            <input type="text" class="form-control mt-3" name="newBudget" id="newBudget" placeholder="e.g., Groceries" required onChange={(e) => { setName(e.target.value); console.log(e.target.value); }} />
          </div>
          <div class="mt-3">
            <label class="fs-5" htmlFor="newBudgetAmount">Amount </label>
            <input type="number" class="form-control mt-3" name="newBudgetAmount" id="newBudgetAmount" placeholder="e.g., 4000 LKR" required inputMode="decimal" onChange={(e) => setAmount(e.target.value)} />
          </div>
          <div class="mt-3">
            <button type="submit" class="btn btn-dark">Create Budget</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddBudgetForm;