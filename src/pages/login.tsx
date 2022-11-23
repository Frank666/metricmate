import {
    Box,
    Container,
    Grid,
    Typography,
} from "@mui/material";
// import {
//     motion
// } from "framer-motion";
import Copyright from '../components/login/copyright';
import Logo from "../components/login/logo";
import SocialAuth from "../components/login/socialAuth";
import styled from "@emotion/styled";

const RootStyle = styled("div")({
    background: "rgb(249, 250, 251)",
    height: "100vh",
    display: "grid",
    placeItems: "center",
});

const HeadingStyle = styled(Box)({
    textAlign: "center",
});

//let easing = [0.6, -0.05, 0.01, 0.99];
// const fadeInUp = {
//     initial: {
//         y: 60,
//         opacity: 0,
//         transition: { duration: 0.6, ease: easing },
//     },
//     animate: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             duration: 0.6,
//             ease: easing,
//         },
//     },
// };

function Login() {
    return (
        <RootStyle>
            <Container maxWidth="lg" >
                <Grid
                    container
                    columns={{ xs: 4, md: 12 }}
                    sx={{
                        minHeight: '60vh',
                        maxWidth: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Grid item xs={5} sx={{
                        justifyContent: 'center',

                    }}>
                        <HeadingStyle >
                            <Logo />
                            <Typography sx={{ fontWeight: 'bold', fontSize: '28px' }} gutterBottom>
                                Sign in to your Account
                            </Typography>
                        </HeadingStyle>

                        <Box >
                            <SocialAuth />
                        </Box>
                        <Copyright sx={{ mt: 8, mb: 4 }} />
                    </Grid>
                    <Grid
                        item xs={7}
                        display={{
                            xs: "none",
                            md: "flex",
                            lg: 'flex'
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: 'black',
                                display: 'flex',
                                justifyContent: 'center',

                            }}
                        >
                            <img
                                style={{
                                    alignSelf: 'center'
                                }}
                                alt='metricmate'
                                src={window.location.origin + '/images/group.png'}
                            />
                        </Box>

                    </Grid>
                </Grid>

            </Container>

        </RootStyle>
    );
};

export default Login;
