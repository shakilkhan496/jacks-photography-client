import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddServices from "../pages/AddServices/AddServices";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import MyReviews from "../pages/MyReviews/MyReviews";
import UpdateReview from "../pages/MyReviews/UpdateReview";
import Login from "../pages/Register/Login";
import SignUp from "../pages/Register/SignUp";
import Service from "../pages/Service/Service";
import Services from "../pages/Services/Services";
import PrivateRoutes from "./PrivateRoutes";


export const route = createBrowserRouter([
    {
        path: '/',
        errorElement: <div className="text-center text-red-600 text-5xl mt-40"><h1>404 NOT FOUND</h1></div>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`https://jacks-photography.vercel.app/services/${params.id}`)
            },
            {
                path: '/myReviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/addService',
                element: <PrivateRoutes><AddServices></AddServices></PrivateRoutes>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/updateReview/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://jacks-photography.vercel.app/customerReviews/${params.id}`)
            }
        ]
    }
])