import { useEffect, useState } from "react";
import { CouponModel } from "../../Model/CouponModel";
import { LoginModel } from "../../Model/LoginModel";
import { authStore } from "../../Redux/AuthState";
import customerService from "../../Services/CustomerService";
import guestService from "../../Services/GuestService";
import "./CouponArea.css";
// import CouponCardGuest from "./CouponCardGuest/CouponCardGuest";

function CouponArea(): JSX.Element {
    const [coupons, setCoupons] = useState<CouponModel[]>([]);
    const [coupon, setCoupon] = useState<CouponModel>();
    const[user, setUser] = useState<LoginModel>();
    const[type, setType] = useState<String>("");

    useEffect(()=>{
        guestService.getAllCoupons()
        .then(coupon=>setCoupons(coupon))
        .catch(err=>alert("rip man..."));

        setUser(authStore.getState().user);
        var t = JSON.stringify(authStore.getState().user);
        if(t !== undefined){
            setType(t.substring(t.indexOf("clientType:")+2, t.lastIndexOf("iss")-3));
        }

    },[coupons]);

    function buyMe(e : number) {   
        if(type.includes("ADMINISTRATOR")){
            alert("Admin can't buy a coupon you silly goose !")
        }
        else if(type.includes("COMPANY")){
            alert("Company can't buy a coupon you silly goose !")
        }
        else{

            customerService.getOneCoupon(e)
            .then(coupon => {
                setCoupon(coupon);
                customerService.purchaseCoupon(coupon)
                .then(r => console.log(r))
                .catch(err => console.log("err buying coupon"));
            
            })
            .catch(err => console.log("err getting one coupon"))
            
            
        }
    }

    function click() {
        console.log("123123");
        
    }

    return (
        <div className="CouponArea">
            <h1 className="display-2">Check out this cool coupons 🎟🎫</h1><br />
            <hr style={{border: "3px solid black"}} />
            <br />
            <div onClick={click} className="row row-cols-1 row-cols-md-3 g-4">
                {coupons.map((c)=>(
                    <div className="col" key={c.id}>
                        <div className="card text-white bg-dark">
                            <img src="/assets/coupon.jpg" className="card-img-top" alt="testing_img"/>
                            <div className="card-body">
                                <h5 className="card-title">{c.title}</h5>
                                <p className="card-text">{c.description}</p>
                                {user && <button value={c.id} onClick={()=>buyMe(c.id)} type="button" className="btn btn-outline-primary position-absolute bottom-0 end-0">Buy Me</button>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CouponArea;
