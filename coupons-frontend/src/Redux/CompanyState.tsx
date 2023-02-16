import { configureStore } from "@reduxjs/toolkit";
import { CompanyModel } from "../Model/CompanyModel";

export class CompanyState{
    companies: CompanyModel[] = [];
    company!: CompanyModel;
}

export enum CompanyActionTypes{
    FetchOneCompany,
    FetchCompanies,
    AddCompany,
    DeleteCompany,
    EditCompany
}

export interface CompanyActions{
    type: CompanyActionTypes;
    payload: any
}

export function CreateFetchOneCompanyAction(id: number){
    return {type: CompanyActionTypes.FetchOneCompany, payload: id}
}
export function CreateFetchCompaniesAction(companies : CompanyModel[]){
    return {type: CompanyActionTypes.FetchCompanies, payload: companies}
}
export function CreateAddAction(company : CompanyModel){
    return {type: CompanyActionTypes.AddCompany, payload: company}
}
export function CreateDeleteAction(id: number){
    return {type: CompanyActionTypes.DeleteCompany, payload: id}
}
export function CreateEditAction(company : CompanyModel){
    return {type: CompanyActionTypes.EditCompany, payload: company}
}

export function companyReducer
(currentState = new CompanyState(), action: CompanyActions){
    const newState = {...currentState};
    switch (action.type) {
        
        case CompanyActionTypes.FetchOneCompany:
            const indexFetchOne = newState.companies.findIndex(c=>c.id === action.payload.id);
            if(indexFetchOne >= 0) {
                newState.company = newState.companies[indexFetchOne];
            }
               
            break;
        
        case CompanyActionTypes.FetchCompanies:
            newState.companies = action.payload;
            break;
        
        case CompanyActionTypes.AddCompany:
            newState.companies.push(action.payload);
            break;

        
        case CompanyActionTypes.DeleteCompany:
            const indexDelete = newState.companies.findIndex(c=>c.id === action.payload.id);
            if(indexDelete >= 0) 
                newState.companies.splice(indexDelete, 1);
            break;

        
        case CompanyActionTypes.EditCompany:
            const indexEdit = newState.companies.findIndex(c=>c.id === action.payload.id);
            if(indexEdit >= 0)
                newState.companies[indexEdit] = action.payload;
            break;
    }

    return newState;
}

export const companyStore = configureStore({reducer:companyReducer});




