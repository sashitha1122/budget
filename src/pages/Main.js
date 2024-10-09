import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, useLoaderData } from 'react-router-dom';
import Nav from '../components/Nav';
import bott from '../Images/new4.webp'

const Main = () => {
    return (
        <div className="pages">
          <div className="mt-3">
          <Nav />
          </div>
          <main>
            <Outlet />
          </main>
          <div className="mt-3">
              <img src={bott} art="bottom" width={1590} height={300}/> 
          </div>
        </div>
    );
};

export default Main;
