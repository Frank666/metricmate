import React from "react";
import styled from "@emotion/styled";
import Copyright from '../components/login/copyright';
import Logo from "../components/login/logo";
import SocialAuth from "../components/login/socialAuth";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";


const RootStyle = styled("div")({
    background: "rgb(249, 250, 251)",
    height: "100vh",
    display: "grid",
    placeItems: "center",
});

const HeadingStyle = styled(Box)({
    textAlign: "center",
});

const ContentStyle = styled("div")({
    maxWidth: 480,
    padding: 25,
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing },
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
        },
    },
};

function Login() {
    return (
        <RootStyle>
            <Container maxWidth="sm">
                <ContentStyle>
                    <HeadingStyle component={motion.div} {...fadeInUp}>
                        <Logo />
                        <Typography sx={{ color: "text.secondary", mb: 5 }}>
                            Login to your account
                        </Typography>
                    </HeadingStyle>

                    <Box component={motion.div} {...fadeInUp}>
                        <SocialAuth />
                    </Box>

                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </ContentStyle>

            </Container>
        </RootStyle>
    );
};

export default Login;
