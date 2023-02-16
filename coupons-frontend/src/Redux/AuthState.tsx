
// import { configureStore } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { createStore } from 'redux';
import {LoginModel} from '../Model/LoginModel';


export class AuthState{
    public token: string;
    public user: LoginModel;

    constructor(){
        const storedToken = localStorage.getItem("token");
        if(storedToken){
            try{
                this.user = jwtDecode(storedToken);
                this.token = storedToken;
            }catch(err: any){
                //add better alert
                alert("error sorting token");
            }
            
        }
    }
}

export enum AuthActionTypes{
    Login,
    Logout
}

export interface AuthAction{
    type: AuthActionTypes,
    payload?: any
}

export function loginAction(token: string){
    return {type: AuthActionTypes.Login, payload: token}
}

export function logoutAction(){
    return {type: AuthActionTypes.Logout}
}

export function reducer(currentState = new AuthState(), action: AuthAction){
    const newState = {...currentState};

    switch(action.type){
        case AuthActionTypes.Login:
            newState.token = action.payload;
            newState.user = jwtDecode(newState.token);
            localStorage.setItem("token", newState.token);
        break;
        
        case AuthActionTypes.Logout:
            newState.token = null;
            newState.user = null;
            localStorage.removeItem("token");
        break;
    }

    return newState;
}

// export const authStore = configureStore({reducer});
export const authStore = createStore(reducer);
