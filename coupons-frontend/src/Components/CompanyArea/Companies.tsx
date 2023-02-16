import "./Companies.css";
import { useEffect, useState } from "react"; 
import { CompanyModel } from "../../Model/CompanyModel";
// import CompanyCardGuest from "./CompanyCardGuest/CompanyCardGuest";
import guestService from "../../Services/GuestService";
import { NavLink } from "react-router-dom";
import CompanyCardGuest from "./CompanyCardGuest/CompanyCardGuest";

function Companies(): JSX.Element {
    const [company, setCompany] = useState<CompanyModel[]>([]);
    useEffect(()=>{
        guestService.getAllCompanies()
        .then(company=>setCompany(company))
        .catch(err=>alert("rip man..."));
    },[company]);
    
    return (
        <div className="Companies">
            <h1 className="display-2">Our trusty companies 👨‍💼</h1><br />
            <hr style={{border: "3px solid black"}} />
            <div className="row ">
                {company.map(c=>(
                        <div className="col-sm-6 p-3" key={c.id}>
                            <div className="card text-white bg-dark ">
                                <div className="card-body">
                                    <h4 className="card-title">{c.name}</h4>
                                    <p className="card-text">{c.email}</p>
                                    <NavLink to={"/coupondetails/" + c.id} id="RouterNavLink">
                                        <a href={"x"} className="btn btn-primary position-absolute bottom-0 end-0">More details ❓</a>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Companies;




    
//     <div className = "col-lg-3">
//     <div className = "card">
//         <div className="card-body">
//             <h3>123</h3>
//             <div>asd</div>
//         </div>
//     </div>
// </div>
// <div className = "col-lg-3">
//     <div className = "card">
//         <div className="card-body">
//             <h3>123</h3>
//             <div>asd</div>
//         </div>
//     </div>
// </div> 
// <div className = "col-lg-3">
//     <div className = "card">
//         <div className="card-body">
//             <h3>123</h3>
//             <div>asd</div>
//         </div>
//     </div>
// </div> 
// <div className = "col-lg-3">
//     <div className = "card">
//         <div className="card-body">
//             <h3>123</h3>
//             <div>asd</div>
//         </div>
//     </div>
// </div> 
// <div className = "col-lg-3">
//     <div className = "card">
//         <div className="card-body">
//             <h3>123</h3>
//             <div>asd</div>
//         </div>
//     </div>
// </div>  