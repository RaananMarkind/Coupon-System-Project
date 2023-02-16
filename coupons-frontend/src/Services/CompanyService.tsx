import axios from "axios";
import { CompanyModel } from "../Model/CompanyModel";
import { CouponModel } from "../Model/CouponModel";
import { companyStore, CreateFetchOneCompanyAction} from "../Redux/CompanyState";
import { couponStore, CreateFetchCouponsAction } from "../Redux/CouponState";
import appConfig from "../Utils/Config";

class CompanyService{

    public async getAllCompanysCoupons() {
        if(companyStore.getState.length === 0){
            const response = axios.get<CouponModel[]>(appConfig.companyUrl + "allcoupons");
            const coupons = (await response).data;
            couponStore.dispatch(CreateFetchCouponsAction(coupons));
            return coupons;
        }
        else{
            return couponStore.getState().coupons;
        }
    }

    public async getOneCompany(id:number) {
        const response = await axios.get<CompanyModel>(appConfig.adminUrl+"company/" + id);
        const company = await response.data;
        companyStore.dispatch(CreateFetchOneCompanyAction(id));
        return company;
    }
}

const companyService = new CompanyService();
export default companyService;