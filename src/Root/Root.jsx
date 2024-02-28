import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";

const Root = () => {
    return (
        <div className="ml-20 mr-20">
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;