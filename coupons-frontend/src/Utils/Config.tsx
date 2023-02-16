class Config{

}

class DevelopmentConfig extends Config{
    public companyUrl: string = "http://localhost:8080/company/";
    public adminUrl: string = "http://localhost:8080/admin/";
    public customerUrl: string = "http://localhost:8080/customer/"
    public guestUrl: string = "http://localhost:8080/guest/"
    public authUrl: string = "http://localhost:8080/auth/";
}


class ProductionConfig extends Config{
    public companyUrl: string = "http://localhost:8080/company/";
    public adminUrl: string = "http://localhost:8080/admin/";
    public customerUrl: string = "http://localhost:8080/customer/"
    public guestUrl: string = "http://localhost:8080/guest/"
    public authUrl: string = "http://localhost:8080/auth/";
}

const appConfig = process.env.NODE_ENV === "development"? 
    new DevelopmentConfig() : new ProductionConfig();

export default appConfig;