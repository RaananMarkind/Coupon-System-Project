import axios from "axios";
import { CouponModel } from "../Model/CouponModel";
import { couponStore, CreateFetchCouponsAction } from "../Redux/CouponState";
import { customerStore } from "../Redux/CustomerState";
import { createAddActionPurchased, purchaseCouponStore } from "../Redux/PurchaseCouponsState";
import appConfig from "../Utils/Config";

class CustomerService{
    public async getAllCustomersCoupons() {
        if(customerStore.getState.length === 0){
            const response = axios.get<CouponModel[]>(appConfig.customerUrl + "allcoupons");
            const coupons = (await response).data;
            couponStore.dispatch(CreateFetchCouponsAction(coupons));
            return coupons;
        }
        else{
            return couponStore.getState().coupons;
        }
    }

    public async purchaseCoupon(coupon :CouponModel) {
        const response = axios.put<CouponModel>(appConfig.customerUrl + coupon)
            
        const mycoupon = (await response).data;
        
        if (mycoupon !== undefined ){
            purchaseCouponStore.dispatch(createAddActionPurchased(mycoupon))
        }

        return (await response).data;
    }

    public async getOneCoupon (id:number){
        const coupon = couponStore.getState().coupons.find(coup => coup.id === id);        
        if (typeof coupon === "undefined")
            return (await axios.get<CouponModel>(appConfig.customerUrl + "onecoupon/" + id)).data;
        else return coupon;
    }
}

const customerService = new CustomerService();
export default customerService;











// "buy?category="+coupon.category+"&title="+coupon.title
//             +"&description="+coupon.description+"&startDate="+coupon.startDate.toString()
//             +"&endDate="+coupon.endDate.toString()+"&amount"+coupon.amount
//             +"&price="+coupon.price+"&image="+coupon.image, coupon);