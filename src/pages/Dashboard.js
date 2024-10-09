import React from 'react';
import { Form } from 'react-router-dom';
import { UserPlusIcon } from '@heroicons/react/16/solid';
import money from '../Images/new2.jpg';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <div>
               <div className=" d-flex justify-content-center align-items-center w-100" style={{ height: '50vh'}} >
                 <div className="col-sm-3">
                    <div className="mt-3" >
                    <h1>
                       Take Control of <span className="text-primary">
                       Your Money
                     </span>
                    </h1>
                    </div>
                    <div className="mt-3 pt-3">
                    <Form className="from-control" method="post"> 
                    <input type="text" name="userName"
                    required placeholder="what is your name?"
                    aria-label="Your Name"
                    autoComplete="given-name" />
                    <div className="mt-3">
                    <button type="submit" className="btn btn-dark">
                        <span>Create Account </span>
                        <UserPlusIcon width={18} />
                    </button>
                    </div>
                    </Form>
                    </div>
                 </div>
                 <div className="mt-3 mx-3">
                        <img src={money} alt="Person money" width={500} height={400} />  
                    </div>
               </div>
            </div>
        </div>
    );
};

export default Dashboard;