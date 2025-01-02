import React from "react";
import TitleBar from "../component/TitleBar";
import { Box, Grid } from "@mui/material";
import portfolioVideo from '../assest/socialMedia/portfolioVideo.mp4'

const About = (props) => {

    return (
        <>
            <TitleBar title={"About Me"}>
                <Box width={"100%"}>
                    <Grid container>
                        <Grid item xs={8}>
                            <Box
                                sx={{
                                    textAlign: "justify",
                                    margin: "30px 30px 0 0",
                                    outline: '1px solid #FFF',
                                    padding: "20px",
                                    borderRadius:"10px"
                            }}
                            >
                                Results-oriented Java Full Stack Developer with 2.8+ years of experience developing scalable web
                                applications and microservices using Java, Spring Boot, React.js, and SQL. Adept at creating
                                dynamic user interfaces, building RESTful APIs, and utilizing Agile methodologies for efficient
                                project delivery. Proven ability in IoT application development, collaborative international projects,
                                and performance optimization
                            </Box>
                            <Box
                                sx={{
                                    margin: "30px 30px 0 0",
                                    outline: '1px solid #FFF',
                                    padding: "20px",
                                    borderRadius: "10px"
                                }}
                            ></Box>
                        </Grid>
                        <Grid item xs={4} display={"flex"} justifyContent={"center"}>
                            <Box
                                sx={{
                                    outline: '1px solid #FFF',
                                    padding: "20px",
                                    borderRadius: "10px"
                             }}
                            >
                                <video width="100%" controls muted className="video">
                                    <source src={portfolioVideo} type="video/mp4" />
                                </video>
                            </Box>
                            
                        </Grid>
                    </Grid>

                </Box>
            </TitleBar>
        </>
    )
}

export default About;