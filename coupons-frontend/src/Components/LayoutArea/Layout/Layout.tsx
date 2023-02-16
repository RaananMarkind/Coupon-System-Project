import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-5"><Header/></div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col"><Menu/></div>
                    </div>
                    <br />
                    <div className="row">
                        <Routing/>
                    </div>
                </div>

        </div>
    );
}

export default Layout;
