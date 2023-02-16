export class LoginModel{
    public email: String;
    public password: String;
    public typeUser: String


    public constructor (email: String, password: String, typeUser: String){
                this.email = email;
                this.password = password;
                this.typeUser = typeUser;
    }
}