export class CustomerModel{
    public id: number;
    public firstName: String;
    public lastName: String;
    public email: String;
    public password: String;


    public constructor (id: number, firstName: String, lastName: String, email: String, password: String){
                this.id = id;
                this.firstName = firstName;
                this.lastName = lastName;
                this.email = email;
                this.password = password;
    }
}