import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                element: <div></div>
            },
            {
                path: '/myToys',
                element: <div></div>
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