import { CouponModel } from "../../../Model/CouponModel";
import "./CouponCardGuest.css";

interface CouponGuestProps{
    coupon: CouponModel;
} 

function CouponCardGuest(property: CouponGuestProps): JSX.Element {
    return (
        <div className="CouponCardGuest">
			<div className="CompanyCardGuest">
			<div className="container">
                "asdasd"
                <p>{property.coupon.title}</p>
                <p>{property.coupon.category}</p>
                <p>{property.coupon.price}</p>
            </div>
        </div>
        </div>
    );
}

export default CouponCardGuest;
