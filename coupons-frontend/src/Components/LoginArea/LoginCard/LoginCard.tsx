import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginModel } from "../../../Model/LoginModel";
import { couponStore } from "../../../Redux/CouponState";
import authService from "../../../Services/AuthService";
// import { authStore } from "../../../Redux/AuthState";
// import { useState, useEffect } from "react";
import "./LoginCard.css";

function LoginCard(): JSX.Element {
    const { register, handleSubmit, formState } = useForm<LoginModel>();
    const navigate = useNavigate();

    function send(user: LoginModel) {
        authService.login(user)
        .then(()=>{
                
            alert("Welcome !");
            navigate("/home");
        })
        .catch(err=>alert(err.message))
    }

    return (
        <div className="LoginCard">
            <div className="container-lg formc">
            <form onSubmit={handleSubmit(send)}>
                <h1 className="display-1">Login</h1><br />
                <p className="lead">
                    Make sure the inputs are valid!
                </p>
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>  
                <hr/>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput inp1" placeholder="name@example.com"
                    {...register("email")}/>
                    <label htmlFor="floatingTextarea">Email</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingInput inp2" placeholder="name@example.com"
                    {...register("password")}/>
                    <label htmlFor="floatingTextarea">Password</label>
                </div>
                <br />
                <select className="form-select" aria-label="Default select example" {...register("typeUser")}>
                    <option value="CUSTOMER">Please select your role</option>
                    <option value="ADMINISTRATOR">ADNINISTRATOR</option>
                    <option value="COMPANY">COMPANY</option>
                    <option value="CUSTOMER">CUSTOMER</option>
                </select>
                <br />
                <input className="btn btn-primary" type="submit" value="Submit"></input>
            </form>
            </div>
        </div>
    );
}

export default LoginCard;
