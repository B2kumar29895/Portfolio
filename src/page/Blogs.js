import React from "react";
import TitleBar from "../component/TitleBar";
import { Box } from "@mui/material";

const Blogs = (props) => {
    
    return (
        <>
            <TitleBar title={"Blog"}>
                <Box>
                   Blog log
                </Box>
            </TitleBar>
        </>
    )
}

export default Blogs;