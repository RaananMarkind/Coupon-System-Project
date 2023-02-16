import { useForm } from "react-hook-form";
import { CustomerModel } from "../../../../Model/CustomerModel";
import "./AddCustomerArea.css";

function AddCustomerArea(): JSX.Element {
    const { register, handleSubmit, formState } = useForm<CustomerModel>();
    function send() {
        console.log("123123");
        
    }

    return (
        <div className="AddCustomerArea">
            <div className="container-lg formc">
             <form onSubmit={handleSubmit(send)}> 
                <h1 className="display-1">Add a Customer</h1><br />
                <p className="lead">
                    Don't forget your data !
                </p>
                <div className="spinner-grow text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>  
                <hr/>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                 {...register("email")}/>
                    <label htmlFor="floatingTextarea">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="fname"
                 {...register("firstName")}/>
                    <label htmlFor="floatingTextarea">First name</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="lname"
                    {...register("lastName")}/>
                    <label htmlFor="floatingTextarea">Last Name</label>
                </div><br />
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingInput" placeholder="password"
                    {...register("password")}/>
                    <label htmlFor="floatingTextarea">Password</label>
                </div>
                <br />

                <input className="btn btn-primary" type="submit" value="Add"></input>
            </form>
            </div>
        </div>
    );
}

export default AddCustomerArea;
