import axios from "axios";
import { LoginModel } from "../Model/LoginModel";
import { authStore, loginAction, logoutAction } from "../Redux/AuthState";
import appConfig from "../Utils/Config";

class AuthService{
    public async login(cred: LoginModel){  
              
        const response = axios.post<string>(appConfig.authUrl + "login?email="+cred.email
        +"&password="+cred.password+"&typeUser="+cred.typeUser);        
        const token = (await response).data;
        authStore.dispatch(loginAction(token));
    }

    public async logout(){
        authStore.dispatch(logoutAction());
    }
}

const authService = new AuthService();
export default authService;