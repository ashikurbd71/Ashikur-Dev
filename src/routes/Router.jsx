import UserRoot from "@/layout/userlayout/UserRoot";
import About from "@/pages/About";
import { ContactUs } from "@/pages/ContactUs";
import ManagerDetails from "@/pages/Details/ManagerDetails";
import RubyDetails from "@/pages/Details/RubyDetails";
import SLAMCSDetails from "@/pages/Details/SLAMCSDetails";
import Education from "@/pages/Education";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";


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
         },
         {
            path : "/skills",
            element : <Skills/>,
         },
         {
            path : "/projects",
            element : <Projects/>
         },

         {
            path : "/education",
            element : <Education/>,
         },
         {
            path : "/managerdetails",
            element : <ManagerDetails/>,
         },
         {
            path : "/slamcsdetails",
            element : <SLAMCSDetails/>,
         },
         {
            path : "/rubydetails",
            element : <RubyDetails/>,
         },
         {
            path : "/contact",
            element : <ContactUs/>,
         }
        ]
    }
 ])

 export default Router