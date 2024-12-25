import { Box, Typography } from "@mui/material";
import React from "react";

const TitleBar = (props) => {

    return (
        <>
            <Box sx={{
                position: "fixed",
                top: 0,
                background: "#131f28",
                width: "calc(100% - 430px)",
                paddingTop:"20px"
            }}>
                <Typography
                    sx={{
                        fontSize: "calc(28px + 2vmin)",
                        fontFamily: "Source Code Pro",
                        fontWeight: 500,
                        letterSpacing: "1px",
                    }}
                >
                    {props.title || "Example Title Bar"}
                </Typography>
            </Box>
            <Box sx={{ marginTop: "90px" }}>
                {props.children}
            </Box>
        </>
    )
}

export default TitleBar;