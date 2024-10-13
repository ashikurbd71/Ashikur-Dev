import UserRoot from "@/layout/userlayout/UserRoot";
import About from "@/pages/About";


import {
    createBrowserRouter,

  } from "react-router-dom";


 const Router = createBrowserRouter ([

    {
        path : "/",
        element : <UserRoot/>,
        children : [
         {
            path : "/about",
            element : <About/>,
         }
        ]
    }
 ])

 export default Router