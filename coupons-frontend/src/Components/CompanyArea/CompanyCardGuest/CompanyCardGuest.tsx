import { useParams } from "react-router-dom";
import { CompanyModel } from "../../../Model/CompanyModel";
import "./CompanyCardGuest.css";
import { useEffect, useState } from "react"; 
import companyService from "../../../Services/CompanyService";


function CompanyCardGuest(): JSX.Element {

    const params = useParams();
    const id = +params.compid!;

    const [company, setCompany] = useState<CompanyModel>();

    useEffect(()=>{
        companyService.getOneCompany(id)
        .then(company => setCompany(company))
        .catch(err =>console.log(err.message))
    }, []);

    return (
        <div className="CompanyCardGuest">
			<div className="container">
                <h1>Here is the data of this company</h1>
                <div className="row ">
                        <div className="col-sm-6 p-3" key={company.id}>
                            <div className="card text-white bg-dark ">
                                <div className="card-body">
                                    <h4 className="card-title">{company.email}</h4>
                                    <p className="card-text">{company.name}</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyCardGuest;
