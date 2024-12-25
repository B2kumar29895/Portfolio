import React from "react";
import MainLayout from "./page/MainLayout";
import ContactUs from "./page/ContactUs";
import Home from "./page/Home";
import About from "./page/About";
import Blogs from "./page/Blogs";
import Project from "./page/Project";
import Resume from "./page/Resume";
import { Route, Routes } from "react-router";

const AppRoutes = () => {
    alert("main")
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/home" element={<Home/>} />
                <Route path="/blogs" element={<Blogs/>} />
                <Route path="/project" element={<Project />} />
                <Route path="/skill/education" element={<Resume/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Route>
        </Routes>
    )

}

export default AppRoutes