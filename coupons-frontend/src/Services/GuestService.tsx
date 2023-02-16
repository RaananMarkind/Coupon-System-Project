import axios from "axios";
import { CompanyModel } from "../Model/CompanyModel";
import { CouponModel } from "../Model/CouponModel";
import appConfig from "../Utils/Config";

class GuestService{
    public async getAllCompanies () {
        const response = axios.get<CompanyModel[]>(appConfig.guestUrl + "guestlallcompanies", );
        const companies = (await response).data;
        return companies;
    }

    public async getAllCoupons () {
        const response = axios.get<CouponModel[]>(appConfig.guestUrl + "guestlallcoupons", );
        const coupons = (await response).data;
        return coupons;
    }
}

const guestService = new GuestService();
export default guestService;