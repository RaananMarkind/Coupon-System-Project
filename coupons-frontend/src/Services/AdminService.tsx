import axios from "axios";
import { CompanyModel } from "../Model/CompanyModel";
import { CustomerModel } from "../Model/CustomerModel";
import { companyStore, CreateFetchCompaniesAction,  } from "../Redux/CompanyState";
import { CreateFetchCustomersAction, customerStore } from "../Redux/CustomerState";
import appConfig from "../Utils/Config";

class AdminSerive{
    public async getAllCompanies () {
            if(companyStore.getState.length === 0){                    
                const response = axios.get<CompanyModel[]>(appConfig.adminUrl + "companies");                
                const companies = (await response).data;
                companyStore.dispatch(CreateFetchCompaniesAction(companies));
                return companies;
        }
        else{
            return companyStore.getState().companies
        }
    }

    public async getOneCompany(id:number){
        return (await axios.get<CompanyModel>(appConfig.adminUrl+ "/company/" + id)).data;
    }

    public async getAllCustomers () {
        if(customerStore.getState.length === 0){                    
            const response = axios.get<CustomerModel[]>(appConfig.adminUrl + "customers", );    
            const customers = (await response).data;
            customerStore.dispatch(CreateFetchCustomersAction(customers));
            return customers;
    }
    else{
        return customerStore.getState().customers;
    }
    }
    public async getAllCoupons () {
        if(customerStore.getState.length === 0){                    
            const response = axios.get<CustomerModel[]>(appConfig.adminUrl + "coupons", );    
            const customers = (await response).data;
            customerStore.dispatch(CreateFetchCustomersAction(customers));
            return customers;
    }
    else{
        return customerStore.getState().customers;
    }
    }
}

const adminService = new AdminSerive();
export default adminService;