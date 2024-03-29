import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile/Profile";
import MyEvent from "../pages/MyEvent/MyEvent";
import NoFound from "../pages/NoFound/NoFound";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <NoFound />,
        element: <Root></Root>, 
        children: [
            {
                path: "/",
                loader: () => fetch("/services.json"),
                element: <Home />
            },
            {
                path: "services/:id",
                loader: () => fetch('/services.json'),
                element: <PrivateRoute><ServiceDetails /></PrivateRoute>
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "profile",
                element: <PrivateRoute> <Profile /></PrivateRoute>
            },
            {
                path: "my-event",
                element: <PrivateRoute><MyEvent /></PrivateRoute> 
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
])

export default router;