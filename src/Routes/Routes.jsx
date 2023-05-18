import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import AllToys from "../pages/AllToys/AllToys";
import ToyDetals from "../pages/AllToys/ToyDetals";
import AddToy from "../pages/AddToy/AddToy";

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
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/toys')
            },
            {
                path: '/myToys',
                element: <PrivateRoutes><div></div></PrivateRoutes>
            },
            {
                path: '/toyDetails/:id',
                element: <PrivateRoutes><ToyDetals></ToyDetals></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/toyDetails/${params.id}`)
            },
            {
                path: '/addToy',
                element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
            },
            {
                path: '/blogs',
                element: <div></div>
            }
        ]
    }
])