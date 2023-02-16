import { NavLink } from "react-router-dom";
import "./AdminArea.css";


function AdminArea(): JSX.Element {
    return (
        <div className="AdminArea">
                <div className="d-flex justify-content-center">
                    <NavLink className={"nav-link active"} to={"/editcompanies"}>
                        <button type="button" className="btn btn-outline-primary btn-space">Companies</button>    
                    </NavLink> 
                    <NavLink className={"nav-link active"} to={"/editcustomers"}>
                        <button type="button" className="btn btn-outline-primary btn-space">Customers</button>    
                    </NavLink> 
                    <NavLink className={"nav-link active"} to={"/editcoupons"}>
                        <button type="button" className="btn btn-outline-primary btn-space">Coupons</button>    
                    </NavLink> 
                </div>
                <h1 className="display-1">control panel administrative tool</h1>
                <hr />
                <p className="leadme">
                    <strong>Here you can edit, delete and read data in the network!</strong>  
                </p>
                <br />
        </div>
    );
}

export default AdminArea;
