import { Form, NavLink } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/16/solid";

const Nav = () => {
    return (
        <nav className="d-flex justify-content-between">
           <NavLink to="/" aria-label="Go to Home"> 
                <span className="mx-3 btn btn-outline-primary ">HomeBudget</span>
           </NavLink>
           <div className="mx-3"> 
           {
             <Form method="post" action="/pages">
                <button type="submit" className="btn btn-danger ">
                    <span>Delete User</span>
                    <TrashIcon width={14} />
                </button>
             </Form>
           }
           </div>
        </nav>
    );
};

export default Nav;