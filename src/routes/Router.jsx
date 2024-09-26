import UserRoot from "@/layout/userlayout/UserRoot";
import Home from "@/pages/Home";

import {
    createBrowserRouter,

  } from "react-router-dom";


 const Router = createBrowserRouter ([

    {
        path : "/",
        element : <UserRoot/>
    }
 ])

 export default Router