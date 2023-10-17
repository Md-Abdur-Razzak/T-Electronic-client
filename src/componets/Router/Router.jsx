import { createBrowserRouter } from "react-router-dom";
import Maincontiner from "../Maincontiner/Maincontiner";
import Home from "../Home/Home";
import Login from "../Uservarified/Login";
import Registration from "../Uservarified/Registration";

export const myRouter = createBrowserRouter([{
    path:"/",
    element:<Maincontiner></Maincontiner>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/reg",
            element:<Registration></Registration>
        }
    ]
}])