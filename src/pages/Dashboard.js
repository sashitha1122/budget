import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlusIcon } from '@heroicons/react/16/solid';
import money from '../Images/new2.jpg';
import bott from '../Images/new4.webp';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <div>
                <div className="d-flex justify-content-center align-items-center w-100" style={{ height: '50vh' }}>
                    <div className="col-sm-3">
                        <div className="mt-3">
                            <h1>
                                Take Control of <span className="text-primary">Your Money</span>
                            </h1>
                        </div>
                        <div className="mt-3 pt-3">
                            {/* Remove the Form wrapper if not needed */}
                            <input
                                type="text"
                                name="userName"
                                required
                                placeholder="What is your name?"
                                aria-label="Your Name"
                                autoComplete="given-name"
                            />
                            <div className="mt-3">
                                <Link to={'/Main'} className="btn btn-dark">
                                    <span>Create Account</span>
                                    <UserPlusIcon width={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 mx-3">
                        <img src={money} alt="Person money" width={500} height={400} />
                    </div>
                </div>
                <div className="mt-3">
                    <img src={bott} alt="bottom" width={1590} height={350} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
