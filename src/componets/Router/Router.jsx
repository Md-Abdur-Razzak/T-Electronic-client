import { createBrowserRouter } from "react-router-dom";
import Maincontiner from "../Maincontiner/Maincontiner";
import Home from "../Home/Home";
import Login from "../Uservarified/Login";
import Registration from "../Uservarified/Registration";
import AddProducts from "../Pages/AddProducts";
import ProviteRouter from "./ProviteRouter";
import Mycart from "../Pages/Mycart";
import Brand_Products from "../Brands/Brand_Products";
import Update from "../Pages/Update";
import Product_Details from "../Pages/Product_Details";
import Errorpage from "../Pages/Errorpage";

export const myRouter = createBrowserRouter([{
    path:"/",
    element:<Maincontiner></Maincontiner>,
    errorElement:<Errorpage></Errorpage>,
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
            loader:()=>fetch("https://tae-sever-side.vercel.app/Addproduct")
        },
        {
            path:"/update/:id",
            element:<ProviteRouter><Update></Update></ProviteRouter>,
            loader:({params})=>fetch(`https://tae-sever-side.vercel.app/Addproduct/${params.id}`)
        },
        {
            path:"/details/:id",
            element:<ProviteRouter><Product_Details></Product_Details></ProviteRouter>,
            loader:({params})=>fetch(`https://tae-sever-side.vercel.app/Addproduct/${params.id}`)
        }
    ]
}])