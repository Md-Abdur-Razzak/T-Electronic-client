import { createBrowserRouter } from "react-router-dom";
import Maincontiner from "../Maincontiner/Maincontiner";
import Home from "../Home/Home";

export const myRouter = createBrowserRouter([{
    path:"/",
    element:<Maincontiner></Maincontiner>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        }
    ]
}])