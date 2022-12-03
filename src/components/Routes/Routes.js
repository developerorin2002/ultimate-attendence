import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Attendence from "../Pages/Attendence/Attendence";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUpPages/SignUp/SignUp";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Login></Login>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/attendence',
                element:<Attendence></Attendence>
            }
        ]
        
    }
])
export default routes;