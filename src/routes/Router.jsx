import UserRoot from "@/layout/userlayout/UserRoot";
import About from "@/pages/About";
import Experience from "@/pages/Experience";


import {
    createBrowserRouter,

  } from "react-router-dom";


 const Router = createBrowserRouter ([

    {
        path : "/",
        element : <UserRoot/>,
        children : [
         {
            path : "/",
            element : <About/>,
         },

         {
            path : "/experince",
            element : <Experience/>,
         }
        ]
    }
 ])

 export default Router