import { useForm } from "react-hook-form";
import { CompanyModel } from "../../../../Model/CompanyModel";
import "./AddCompanyArea.css";

function AddCompanyArea(): JSX.Element {
const { register, handleSubmit, formState } = useForm<CompanyModel>();
    function send() {
        console.log("123123");
        
    }
    return (
        <div className="AddCompanyArea">
            <div className="container-lg formc">
             <form onSubmit={handleSubmit(send)}> 
                <h1 className="display-1">Add a Company</h1><br />
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
                    <input type="text" className="form-control" id="floatingInput" placeholder="name"
                 {...register("name")}/>
                    <label htmlFor="floatingTextarea">Name</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingInput" placeholder="name@example.com"
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

export default AddCompanyArea;
