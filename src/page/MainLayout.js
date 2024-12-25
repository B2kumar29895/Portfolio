import React from "react";
import { Box, Grid, Grid2 } from "@mui/material";
import SideBar from "./SideBar";
import { Outlet } from "react-router";
import TitleBar from "../component/TitleBar";

const MainLayout = () => {
  

    return (
        <>
            <Box>
                <SideBar />
            </Box>
            <Box className="main-layout-contaier">
                <Box className="sub-main-layout">
                   
                    <Outlet/>
                </Box>
            </Box>
            
        </>
    )
}

export default MainLayout;