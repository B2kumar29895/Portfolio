import React from "react";
import TitleBar from "../component/TitleBar";
import { Box } from "@mui/material";

const About = (props) => {
    
    return (
        <>
            <TitleBar title={"About"}>
                <Box>
                    About log
                </Box>
            </TitleBar>
        </>
    )
}

export default About;