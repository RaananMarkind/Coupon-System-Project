export class CompanyModel{
    public id: number;
    public name: String;
    public email: String;
    public password: String;

    public constructor (id: number, name: String, email: String, password: String){
                this.id = id;
                this.name = name;
                this.email = email;
                this.password = password;
    }
}