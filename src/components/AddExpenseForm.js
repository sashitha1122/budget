import React, { useState } from "react";

const AddExpenseFrom = () => {

    return (
     <form onSubmit={onSubmit}>
        <div className='row '>
           <div className='col-sm'>
                <label for='name'>Name </label>
                <input required='required' type='text' className='form-control' id='name' value={name} onChange={(event) => setName(event.target.value)}></input>
            </div> 
            <div className='col-sm '>
                <label for='name'>Cost </label>
                <input required='required' type='text' className='form-control' id='name' value={cost} onChange={(event) => setCost(event.target.value)}></input>
            </div> 
            <div className='col-sm mt-3 '>
                <button type='submit' className='btn btn-primary'>Save</button>
            </div> 
        </div>
     </form>
    );
};

export default AddExpenseFrom;