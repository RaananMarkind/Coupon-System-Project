import { NavLink } from "react-router-dom";
import authService from "../../../Services/AuthService";
import { useState, useEffect } from "react";
import {LoginModel} from "../../../Model/LoginModel";
import "./Menu.css";
import { authStore } from "../../../Redux/AuthState";


function Menu(): JSX.Element {
    const[user, setUser] = useState<LoginModel>();
    const[type, setType] = useState<String>("");

    useEffect(()=>{
        authStore.subscribe(()=>{
            setUser(authStore.getState().user);
            var t = JSON.stringify(authStore.getState().user);
            setType(t.substring(t.indexOf("clientType:")+2, t.lastIndexOf("iss")-3));
        })
    },[user])

    function logout() {
        authService.logout()
        .then(()=>alert("goodbye :)"))
        .catch(err=>alert(err.message))
    }
    
    return (
        <div className="Menu">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse w-100 order-3 dual-collapse2" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            {
                            type.includes("CUSTOMER") &&
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={"/mycoupons"}>My coupons</NavLink> 
                            </li>
                            }
                            {
                            type.includes("COMPANY") &&
                            <li className="nav-item">
                               <NavLink className="nav-link active" aria-current="page" to={"/companiescoupons"}>Company's coupons</NavLink> 
                            </li>     
                            }
                            <li className="nav-item disabled">
                                <NavLink className="nav-link active" to={"/coupons"}>Check all type of coupons</NavLink> 
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to={"/collabs"}>Check our collabs</NavLink>  
                            </li>
                            {type.includes("ADMINISTRATOR") &&
                            <li className="nav-item">
                            <NavLink className="nav-link active" to={"/station"}>Admin Station</NavLink>  
                            </li>    
                            }
                            {!user &&
                            <li className="nav-item">
                                <NavLink className="nav-link active" to={"/sign"}>Sign in 🗝</NavLink>
                            </li>
                            }
                            {user &&
                            <li className="nav-item"> 
                                <NavLink className="nav-link active" to={"#"} onClick ={logout}>
                                Logout <i className="bi bi-door-open-fill" ></i>
                                </NavLink>
                            </li>
                            }                            
                        </ul>
                    </div>
                </nav>
                </div>
    );
}

export default Menu;
