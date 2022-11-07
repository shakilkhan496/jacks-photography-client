import { createBrowserRouter } from "react-router-dom";
import Course from "../components/Course/Course";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Main from "../layout/Main";
import NotFoundPage from "../pages/404NotFoundPage/NotFoundPage";
import Blogs from "../pages/Blogs/Blogs";
import CheckOut from "../pages/CheckOut/CheckOut";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/Home/Home";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {

        path: '/',
        errorElement: <NotFoundPage></NotFoundPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
            },

            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`https://assignment-11-server-five.vercel.app/courses/${params.id}`),
                element: <Course></Course>
            }, {
                path: '/courses/checkout/:id',
                loader: ({ params }) => fetch(`https://assignment-11-server-five.vercel.app/courses/${params.id}`),
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>

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
                path: '/blog',
                element: <Blogs></Blogs>
            }

        ]

    }
])