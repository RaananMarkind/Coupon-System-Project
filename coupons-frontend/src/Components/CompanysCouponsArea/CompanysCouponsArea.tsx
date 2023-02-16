import "./CompanysCouponsArea.css";
import {useEffect, useState} from 'react';
import { CouponModel } from "../../Model/CouponModel";
import companyService from "../../Services/CompanyService";

function CompanysCouponsArea(): JSX.Element {
    const [coupons, setCoupons] = useState<CouponModel[]>([]);
    
    useEffect(()=>{
        companyService.getAllCompanysCoupons()
        .then(coupons => setCoupons(coupons))
        .catch(err => console.error());   
    })

    return (
        <div className="CompanysCouponsArea">

			<h1>Welcome, user</h1>
            <h2>here are your coupons: </h2>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {coupons.map((c)=>(
                    <div className="col" key={c.id}>
                        <div className="card text-white bg-dark">
                            <img src="/assets/coupon.jpg" className="card-img-top" alt="testing_img"/>
                            <div className="card-body">
                                <h5 className="card-title">{c.title}</h5>
                                <p className="card-text">{c.description}</p>
                                <button type="button" className="btn btn-outline-primary position-absolute bottom-0 end-0">Update coupon</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default CompanysCouponsArea;
