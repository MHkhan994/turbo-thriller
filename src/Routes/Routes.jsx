import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/toys')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allToys',
                element: <div></div>,
                loader: () => fetch('http://localhost:5000/toys')
            },
            {
                path: '/myToys',
                element: <PrivateRoutes><div></div></PrivateRoutes>
            },
            {
                path: '/addToy',
                element: <div></div>
            },
            {
                path: '/blogs',
                element: <div></div>
            }
        ]
    }
])