import React, { useContext } from 'react';
import {
    Grid,
    styled,
    alpha,
    InputBase,
    AppBar,
    Toolbar,
    Box,
    Typography,
    Stack,
    CssBaseline,
    Card,
    CardContent,
    Avatar,
    CardHeader,
    CardActionArea,

} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import { motion } from "framer-motion";
import { metricMateLogo } from '../../shared/constants/configs.js'
import { TabPanel } from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { auth as fAuth } from '../../services/firebase.js';
import { UserContext } from '../../hooks/userContext';
import { TrainersService } from '../../openapi/services/TrainersService'

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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexWrap: "wrap",
            "& > *": {
                margin: theme.spacing(3),
            },
        },
    })
);

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto"
    }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch"
            }
        }
    }
}));

export default function SearchAppBar() {
    const appContext = useContext(UserContext);
    // @ts-ignore: Object is possibly 'null'.
    const { setAuth } = appContext.providerAuth;
    // @ts-ignore: Object is possibly 'null'.
    const { setUser } = appContext.providerUser;
    //const { response } = useAxios(UserContext);

    const classes = useStyles()
    const clients = [
        { name: 'Francisco', cals: 13000, reps: 10, avg: 0.5, description: 'Last Workout 3 hours ago', color: '#7CB342' },
        { name: 'Lucas', cals: 16500, reps: 20, avg: 0.25, description: 'Last Workout 1 hours ago', color: '#FFFF00' },
        { name: 'Speedy', cals: 14250, reps: 30, avg: 0.15, description: 'Last Workout 2 days ago', color: '#FFA000' },
        { name: 'Nito', cals: 19000, reps: 13, avg: 0.45, description: 'Last Workout 1 day ago', color: '#FF5252' }
    ]

    const workouts = [
        { name: 'Francisco', cals: 13000, reps: 10, avg: 0.5, description: 'Last Workout 3 hours ago', color: '#7CB342' },
        { name: 'Lucas', cals: 16500, reps: 20, avg: 0.25, description: 'Last Workout 1 hours ago', color: '#FFFF00' },
        { name: 'Lucas', cals: 16500, reps: 20, avg: 0.25, description: 'Last Workout 1 hours ago', color: '#FFFF00' },
    ]

    const logout = () => {
        fAuth.signOut().then(() => {
            setUser(undefined);
            setAuth(false);
        });
    }

    // useEffect(() => {
    //     if (response !== undefined) {
    //         if (response.success) {
    //             setUser(response);
    //         } else {
    //             console.log(`The token is still valid`)
    //         }
    //     }

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [response]);

    const refresh = async () => {
        var trainerResponse = await TrainersService.getTrainers();
        console.log(trainerResponse);

    }
    const [value, setValue] = React.useState('1');


    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    const logoSizeBar = {
        maxWidth: '70px',
    }
    return (

        <React.Fragment>
            <TabContext value={value}>
                <Box sx={{ flexGrow: 1 }} component={motion.div} {...fadeInUp}>

                    <CssBaseline />

                    <AppBar position="static">
                        <Toolbar
                            sx={{
                                justifyContent: "space-between"
                            }}
                        >
                            <Stack direction="row" alignItems="center">
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                                >
                                    <img
                                        alt="Metric Mate"
                                        src={metricMateLogo}
                                        style={logoSizeBar}
                                    />
                                </Typography>
                            </Stack>
                            <TabList onChange={handleChange} >
                                <Tab label="Clients" value="1" />
                                <Tab label="Workouts" value="2" />
                            </TabList>
                            <button
                                type="button"
                                className={"btn-danger"}
                                onClick={logout}
                            >
                                {" Log Out"}
                            </button>
                            <button
                                type="button"
                                className={"btn-danger"}
                                onClick={refresh}
                            >
                                {" Test refresh"}
                            </button>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ "aria-label": "search" }}
                                />
                            </Search>

                        </Toolbar>
                    </AppBar>

                </Box>
                <Stack direction="row" alignItems="center">

                    <div className={classes.root}>
                        <TabPanel onChange={() => handleChange} value={"1"} >
                            <Box className={classes.root} component={motion.div} {...fadeInUp}>
                                <Grid
                                    container
                                    spacing={4}
                                    direction="row"
                                    // justify="space-between"
                                    // alignItems="center"
                                    {...fadeInUp}
                                >
                                    {clients.map(elem => (
                                        <Grid item xs={12} sm={6} md={4} key={clients.indexOf(elem)}>
                                            <Card style={{ backgroundColor: elem.color }}>
                                                <CardActionArea>
                                                    <CardHeader
                                                        avatar={<Avatar>N</Avatar>}
                                                        title={elem.name}
                                                        subheader={`Calories: ${elem.cals}`}
                                                        titleTypographyProps={{ variant: 'h4' }}
                                                    />
                                                    <CardContent>
                                                        <Typography variant="h5">{`Reps: ${elem.reps}`}</Typography>
                                                        <Typography variant="h5">{`AVG Velocity: ${elem.avg}`}</Typography>
                                                        <Typography variant="h5">{elem.description}</Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </TabPanel>
                        <TabPanel value={"2"}>
                            <Box className={classes.root} component={motion.div} {...fadeInUp}>
                                <Grid
                                    container
                                    spacing={4}
                                    direction="row"
                                    // justify="space-between"
                                    // alignItems="center"
                                    {...fadeInUp}
                                >
                                    {workouts.map(elem => (
                                        <Grid item xs={12} sm={6} md={4} key={workouts.indexOf(elem)}>
                                            <Card style={{ backgroundColor: elem.color }}>
                                                <CardActionArea>
                                                    <CardHeader
                                                        avatar={<Avatar>N</Avatar>}
                                                        title={elem.name}
                                                        subheader={`Calories: ${elem.cals}`}
                                                        titleTypographyProps={{ variant: 'h4' }}
                                                    />
                                                    <CardContent>
                                                        <Typography variant="h5">{`Reps: ${elem.reps}`}</Typography>
                                                        <Typography variant="h5">{`AVG Velocity: ${elem.avg}`}</Typography>
                                                        <Typography variant="h5">{elem.description}</Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </TabPanel>
                    </div>
                </Stack>
            </TabContext>
        </React.Fragment >
    );
}
