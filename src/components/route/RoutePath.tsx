import React,{}from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { ContactUS } from "../pages/contact";
import { Home } from "../pages/HomePage";
import { Products } from "../pages/Products";


export const RoutePath=()=>{


    return<>
    <Routes>
     <Route path="*" element={<Home/>}/>
     <Route path="/About" element={<About />} />
     <Route path="/ContactUS" element={<ContactUS/>}/>
     </Routes>
    </>
}