import { configureStore } from "@reduxjs/toolkit";
import { CouponModel } from "../Model/CouponModel";

export class CouponState{
    public coupons: CouponModel[] = [];
    public coupon!: CouponModel;
}

export enum CouponActionTypes{
    FetchOneCoupon,
    FetchCoupons,
    AddCoupon,
    DeleteCoupon,
    EditCoupon
}

export interface CouponActions{
    type: CouponActionTypes;
    payload: any
}

export function CreateFetchOneCouponAction(id: number){
    return {type: CouponActionTypes.FetchOneCoupon, payload: id}
}
export function CreateFetchCouponsAction(coupons : CouponModel[]){
    return {type: CouponActionTypes.FetchCoupons, payload: coupons}
}
export function CreateAddAction(coupon : CouponModel){
    return {type: CouponActionTypes.AddCoupon, payload: coupon}
}
export function CreateDeleteAction(id: number){
    return {type: CouponActionTypes.DeleteCoupon, payload: id}
}
export function CreateEditAction(coupon : CouponModel){
    return {type: CouponActionTypes.EditCoupon, payload: coupon}
}

export function companyReducer
(currentState = new CouponState(), action: CouponActions){
    const newState = {...currentState};
    switch (action.type) {
        
        case CouponActionTypes.FetchOneCoupon:
            const indexFetchOne = newState.coupons.findIndex(c=>c.id === action.payload.id);
            if(indexFetchOne >= 0) {
                newState.coupon = newState.coupons[indexFetchOne];
            }     
            break;
        
        case CouponActionTypes.FetchCoupons:
            newState.coupons = action.payload;
            break;
        
        case CouponActionTypes.AddCoupon:
            newState.coupons.push(action.payload);
            break;

        
        case CouponActionTypes.DeleteCoupon:
            const indexDelete = newState.coupons.findIndex(c=>c.id === action.payload.id);
            if(indexDelete >= 0) 
                newState.coupons.splice(indexDelete, 1);
            break;

        
        case CouponActionTypes.EditCoupon:
            const indexEdit = newState.coupons.findIndex(c=>c.id === action.payload.id);
            if(indexEdit >= 0)
                newState.coupons[indexEdit] = action.payload;
            break;
    }

    return newState;
}

export const couponStore = configureStore({reducer:companyReducer});




