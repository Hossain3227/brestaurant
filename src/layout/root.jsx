import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/footer";
import NavBar from "../shared/navBar";


const Root = () => {
    const location = useLocation();
    const noFooter = location.pathname.includes('login')
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            { noFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;