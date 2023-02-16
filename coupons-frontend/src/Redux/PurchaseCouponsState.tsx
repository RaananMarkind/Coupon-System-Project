
import { configureStore } from "@reduxjs/toolkit";
import { CouponModel } from "../Model/CouponModel";



export class PurchasedCouponsState{
    public purchasedCoupons:CouponModel[] = [];
}

export enum CouponsActionType{
    FetchCoupons, AddCoupon, DeleteCoupon, 
}
export interface CouponsAction {
    type: CouponsActionType, 
    payload?: any
}

export function createFetchActionPurchased(coupons:CouponModel[]){
    return {type:CouponsActionType.FetchCoupons, payload:coupons};
}
export function createAddActionPurchased(coupon:CouponModel){
    return{type:CouponsActionType.AddCoupon, payload:coupon};
}

export function createDeleteActionPurchased(id:number){
    return {type:CouponsActionType.DeleteCoupon, payload:id};
}

export function couponsReducer(currentState = new PurchasedCouponsState(), action:CouponsAction): PurchasedCouponsState{

    const newState = {...currentState};

    switch(action.type){

        case CouponsActionType.FetchCoupons:
            newState.purchasedCoupons = action.payload;
        break;
        
        case CouponsActionType.AddCoupon:
            newState.purchasedCoupons.push(action.payload);
        break;

        case CouponsActionType.DeleteCoupon:
            console.log(action.payload);
            
            const indexToDelete = newState.purchasedCoupons.findIndex(coupon=>coupon.id === action.payload);
            if (indexToDelete >= 0)
            newState.purchasedCoupons.splice(indexToDelete, 1);
            break;

    }
    return newState
}

export const purchaseCouponStore = configureStore({reducer:couponsReducer});