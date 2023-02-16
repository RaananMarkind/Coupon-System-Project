import { CouponModel } from "../../Model/CouponModel";
import "./CustomersCouponsArea.css";
import {useEffect, useState} from 'react';
import customerService from "../../Services/CustomerService";

function CustomersCouponsArea(): JSX.Element {
    const [coupons, setCoupons] = useState<CouponModel[]>([]);

    useEffect(()=>{
        customerService.getAllCustomersCoupons()
        .then(coupons => setCoupons(coupons))
        .catch(err => console.error());   
    })

    return (
        <div className="CustomersCouponsArea">
			<h1>My coupons</h1>
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

export default CustomersCouponsArea;
