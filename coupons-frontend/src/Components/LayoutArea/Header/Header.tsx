import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <NavLink to={"/home"} className={"nav-link active"}>
                <h1 className="display-1">Coupon
                        <small className="text-muted">Me</small>
                    </h1>
                    <figcaption className="blockquote-footer text-end">
                        easy and fast is our slogan <cite title="Source Title">(Raanan Markind)</cite>
                    </figcaption>
            </NavLink> 
        </div>
    );
}

export default Header;
