import { useNavigate } from "react-router-dom";
import AdminArea from "../AdminArea";
// import { NavLink } from "react-router-dom";
import "./EditorCouponArea.css";
import { CouponModel } from "../../../Model/CouponModel";
import { useEffect, useState } from "react";
import guestService from "../../../Services/GuestService";

function EditorCouponArea(): JSX.Element {
    var navigate = useNavigate();
    const [coupon, setCoupon] = useState<CouponModel[]>([]);


    function back() {
        navigate("/station")
    }

    useEffect(()=>{
        guestService.getAllCoupons()
        .then(coupon=>setCoupon(coupon))
        .catch(err=>alert("rip man..."));
    },[coupon]);

    return (
        <div className="EditorCouponArea">
			<AdminArea/>
			<table className="table table-striped table-border caption-top">
                <caption className="cap">Here you can find all the customers</caption>
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action Update</th>
                        <th scope="col">Action Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {coupon.map(c=>
                    <tr key={c.id}>
                        <td>{c.id}</td>
                        <td>{c.title}</td>
                        <td>{c.description}</td>
                        <td>{c.price}</td>
                        <td><button type="button" onClick={back} className="btn btn-warning float-end disabled">Update</button></td>
                        <td><button type="button" onClick={back} className="btn btn-secondary float-end disabled">Delete</button></td>
                    </tr> 
                        )}
                </tbody>
            </table>
            <button type="button" onClick={back} className="btn btn-danger float-end">Back</button>

        </div>
    );
}

export default EditorCouponArea;
