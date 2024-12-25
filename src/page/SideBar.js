import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import MenuList from "../Util/MenuList";
import facebook from '../assest/socialMedia/facebook.png';
import linkedIn from '../assest/socialMedia/linkedin.png';
import twitter from '../assest/socialMedia/twitter.png';
import photo from '../assest/document/photo.jpg';
import Resume from '../assest/document/Bittu_Kumar_Resume.pdf';
import { useNavigate } from "react-router";


const SideBar = () => {
    const navigate = useNavigate();
    return (
        <>

            <Box className="sidebar">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "30px 0 20px 0",
                        flexDirection: "column",
                        alignItems: 'center'

                    }}
                >
                    <Avatar src={photo} alt="profile-Image"
                        sx={{
                            width: 140,
                            height: 140
                        }}
                    />
                    <Box>
                        <Typography
                            sx={{
                                textAlign: 'center',
                                fontSize: "26px",
                                fontFamily: "Source Code Pro",
                            }}
                        >Bittu Kumar</Typography>
                        <Typography
                            sx={{
                                textAlign: "center",
                                fontFamily: "Source Code Pro",
                                color: "#FFA23A"
                            }}
                        >Java Developer</Typography>
                    </Box>
                </Box>
                <Box className={"sidebar-menu"}>
                    {
                        MenuList.map((item, index) => (
                            <Box className={"sidebar-sub-menu"} key={index}
                                onClick={() => navigate(item.navLink)}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "18px",
                                        fontFamily: "Source Code Pro",
                                    }}
                                >
                                    {item.name}
                                </Typography>
                            </Box>
                        ))
                    }
                </Box>

                <Box className="sidebar-footer">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src={linkedIn} alt="linkedIn" />
                        <img src={facebook} alt="facebook"
                            style={{ margin: "0 15px" }}
                        />
                        <img src={twitter} alt="twitter" />
                    </div>
                    
                    <a href={Resume} download>
                        <button className="download-cv-btn">
                            Download CV
                        </button>
                    </a>
                    
                </Box>
            </Box>
        </>
    )
}

export default SideBar;