import { useEffect, useState } from "react";
import {NavLink, useNavigate} from "react-router-dom";
import { CustomerModel } from "../../../Model/CustomerModel";
import adminService from "../../../Services/AdminService";
import AdminArea from "../AdminArea";
import "./EditorCustomerArea.css";

function EditorCustomerArea(): JSX.Element {
    
    var navigate = useNavigate();
    function back() {
        navigate("/station")
    }
    function addCustomer() {
        navigate("/addCustomer")
    }

    const [customers, setCustomers] = useState<CustomerModel[]>([]);

    useEffect( ()=>{
        adminService.getAllCustomers()
        .then(customer => {setCustomers(customer);
        })
        .catch(err => alert("err..."))
    }, []);
    return (
        <div className="EditorCustomerArea">
            <AdminArea/>
			<table className="table table-striped table-border caption-top">
                <caption className="cap">Here you can find all the customers</caption>
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Action Update</th>
                        <th scope="col">Action Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(c=>
                        <tr key={c.id}>
                            <td>{c.firstName}</td>
                            <td>{c.lastName}</td>
                            <td><button type="button" onClick={back} className="btn btn-warning float-end">Update</button></td>
                            <td><button type="button" onClick={back} className="btn btn-secondary float-end">Delete</button></td>
                        </tr>
                        )}
                </tbody>
            </table>

            <button type="button" onClick={back} className="btn btn-danger float-end">Back</button>
            <button type="button" onClick={addCustomer} className="btn btn-success float-end">Add new</button>
        </div>
    );
}

export default EditorCustomerArea;
