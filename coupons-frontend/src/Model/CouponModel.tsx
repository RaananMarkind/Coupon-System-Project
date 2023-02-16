import { CompanyModel } from "./CompanyModel";

export class CouponModel{
    public id: number;
    public company: CompanyModel;
    public category: String;
    public title: String;
    public description: String;
    public startDate: Date;
    public endDate: Date;
    public amount: number;
    public price: number;
    public image: String | File | FileList;

    public constructor (id: number, company: CompanyModel,
         category: String, title: String,  description: String , startDate: Date, 
            endDate: Date, amount: number, price: number, image:File | FileList | String){
                this.id = id;
                this.company = company;
                this.category = category
                this.title = title;
                this.description=description
                this.startDate=startDate
                this.endDate=endDate
                this.amount=amount
                this.price=price
                this.image=image
    }
}