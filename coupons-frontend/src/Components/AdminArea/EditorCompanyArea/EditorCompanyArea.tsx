import { useEffect, useState } from "react";
import {NavLink, useNavigate } from "react-router-dom";
import { CompanyModel } from "../../../Model/CompanyModel";
import adminService from "../../../Services/AdminService";
import AdminArea from "../AdminArea";
import "./EditorCompanyArea.css";

function EditorCompanyArea(): JSX.Element {
    var navigate = useNavigate();
    function back() {
        navigate("/station")
    }
    
    function addCompany() {
        navigate("/addCompany")
    }

    
    const [companies, setCompanies] = useState<CompanyModel[]>([]);

    useEffect( ()=>{
        adminService.getAllCompanies()
        .then(company => {setCompanies(company)})
        .catch(err => alert(err.message))
    }, []);
    
    return (
        <div className="EditorCompanyArea">
           <AdminArea/>
			<table className="table table-striped table-border caption-top">
                <caption className="cap">Here you can find all the companies</caption>
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Company name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action Update</th>
                        <th scope="col">Action Delete</th>
                    </tr>
                </thead>
                <tbody>
                     {companies.map(c=> 
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                            <td>{c.email}</td>
                            <td><button type="button" onClick={back} className="btn btn-danger float-end">update</button></td>
                            <td><button type="button" onClick={back} className="btn btn-danger float-end">delete</button></td>
                        </tr>
                     )}
                </tbody>
            </table>
            <button type="button" onClick={back} className="btn btn-danger float-end">Back</button>
            <button type="button" onClick={addCompany} className="btn btn-success float-end">Add new</button>
        </div>
    );
}

export default EditorCompanyArea;
