import { configureStore } from "@reduxjs/toolkit";
import { CustomerModel } from "../Model/CustomerModel";

export class CustomerState{
    customers: CustomerModel[] = [];
    customer!: CustomerModel;
}

export enum CustomerActionTypes{
    FetchOneCustomer,
    FetchCustomers,
    AddCustomer,
    DeleteCustomer,
    EditCustomer
}

export interface CustomerActions{
    type: CustomerActionTypes;
    payload: any
}

export function CreateFetchOneCustomerAction(id: number){
    return {type: CustomerActionTypes.FetchOneCustomer, payload: id}
}
export function CreateFetchCustomersAction(customers : CustomerModel[]){
    return {type: CustomerActionTypes.FetchCustomers, payload: customers}
}
export function CreateAddAction(customer : CustomerModel){
    return {type: CustomerActionTypes.AddCustomer, payload: customer}
}
export function CreateDeleteAction(id: number){
    return {type: CustomerActionTypes.DeleteCustomer, payload: id}
}
export function CreateEditAction(customer : CustomerModel){
    return {type: CustomerActionTypes.EditCustomer, payload: customer}
}

export function companyReducer
(currentState = new CustomerState(), action: CustomerActions){
    const newState = {...currentState};
    switch (action.type) {
        
        case CustomerActionTypes.FetchOneCustomer:
            const indexFetchOne = newState.customers.findIndex(c=>c.id === action.payload.id);
            if(indexFetchOne >= 0) {
                newState.customer = newState.customers[indexFetchOne];
            }     
            break;
        
        case CustomerActionTypes.FetchCustomers:
            newState.customers = action.payload;
            break;
        
        case CustomerActionTypes.AddCustomer:
            newState.customers.push(action.payload);
            break;

        
        case CustomerActionTypes.DeleteCustomer:
            const indexDelete = newState.customers.findIndex(c=>c.id === action.payload.id);
            if(indexDelete >= 0) 
                newState.customers.splice(indexDelete, 1);
            break;

        
        case CustomerActionTypes.EditCustomer:
            const indexEdit = newState.customers.findIndex(c=>c.id === action.payload.id);
            if(indexEdit >= 0)
                newState.customers[indexEdit] = action.payload;
            break;
    }

    return newState;
}

export const customerStore = configureStore({reducer:companyReducer});




