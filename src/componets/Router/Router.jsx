import { createBrowserRouter } from "react-router-dom";
import Maincontiner from "../Maincontiner/Maincontiner";
import Home from "../Home/Home";
import Login from "../Uservarified/Login";
import Registration from "../Uservarified/Registration";
import AddProducts from "../Pages/AddProducts";
import ProviteRouter from "./ProviteRouter";
import Mycart from "../Pages/Mycart";
import Brand_Products from "../Brands/Brand_Products";

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
        },
        {
            path:"/add_product",
            element:<ProviteRouter><AddProducts></AddProducts></ProviteRouter>
        },
        {
            path:"/mycart",
            element:<ProviteRouter><Mycart></Mycart></ProviteRouter>
        },
        {
            path:"/bpro/:name",
            element:<Brand_Products></Brand_Products>,
            loader:()=>fetch("http://localhost:3000/Addproduct")
        }
    ]
}])