import Home from "@/pages/Home";

import {
    createBrowserRouter,

  } from "react-router-dom";


 const Router = createBrowserRouter ([

    {
        path : "/",
        element : <Home/>
    }
 ])

 export default Router