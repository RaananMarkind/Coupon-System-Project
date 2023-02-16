import "./Routing.css";
import { Route, Routes } from "react-router-dom";
import Companies from "../../CompanyArea/Companies";
import LoginCard from "../../LoginArea/LoginCard/LoginCard";
import AdminArea from "../../AdminArea/AdminArea";
import EditorCompanyArea from "../../AdminArea/EditorCompanyArea/EditorCompanyArea";
import EditorCustomerArea from "../../AdminArea/EditorCustomerArea/EditorCustomerArea";
import EditorCouponArea from "../../AdminArea/EditorCouponArea/EditorCouponArea";
import EditCompany from "../../AdminArea/EditorCompanyArea/EditCompany/EditCompany";
import EditCustomer from "../../AdminArea/EditorCustomerArea/EditCustomer/EditCustomer";
import AddCompanyArea from "../../AdminArea/EditorCompanyArea/AddCompanyArea/AddCompanyArea";
import AddCustomerArea from "../../AdminArea/EditorCustomerArea/AddCustomerArea/AddCustomerArea";
import CouponArea from "../../CouponArea/CouponArea";
import CouponCard from "../../AdminArea/EditorCouponArea/CouponCard/CouponCard";
import CompanysCouponsArea from "../../CompanysCouponsArea/CompanysCouponsArea";
import CustomersCouponsArea from "../../CustomersCouponsArea/CustomersCouponsArea";
import CompanyCardGuest from "../../CompanyArea/CompanyCardGuest/CompanyCardGuest";
function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/mycoupons" element={<CustomersCouponsArea/>}/>
                <Route path="/companiescoupons" element={<CompanysCouponsArea/>}/>
                <Route path="/coupondetails/:compid"  element={<CompanyCardGuest/>}/>
                <Route path="/coupons" element={<CouponArea/>}/>
                <Route path="/collabs" element={<Companies/>}/>
                <Route path="/station" element={<AdminArea/>}/>
                <Route path="/editcompanies" element={<EditorCompanyArea/>}/>
                <Route path="/editcustomers" element={<EditorCustomerArea/>}/>
                <Route path="/editcoupons" element={<EditorCouponArea/>}/>
                <Route path="/sign" element={<LoginCard/>}/>
                <Route path="/editOneCompany" element = {<EditCompany/>}/>
                <Route path="/editOneCustomer" element = {<EditCustomer/>}/>
                <Route path="/addCompany" element = {<AddCompanyArea/>}/>
                <Route path="/addCustomer" element = {<AddCustomerArea/>}/>
                <Route path="/adminCouponCard" element = {<CouponCard/>}/>
                <Route path="*" element={""}/>
            </Routes>
        </div>
    );
}

export default Routing;
