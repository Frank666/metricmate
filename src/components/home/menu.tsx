import {
    useState,
    useContext
} from 'react';
import { Toolbar, IconButton, Divider, List } from '@mui/material';
import MuiAppBar, {
    AppBarProps as MuiAppBarProps
} from '@mui/material/AppBar';
import {
    styled,
} from '@mui/material/styles';
import {
    UserContext
} from '../../hooks/userContext';
import { metricMateLogo } from '../../shared/constants/configs';
import Box from '@mui/material/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import MenuListItems from './menuItems';
import MuiDrawer from '@mui/material/Drawer';
import SearchBar from './searchBar';

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const drawerWidth: number = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

export default function Menu() {
    const { providerClientsAPI, providerClientsFiltered, providerSearchCriteria } = useContext(UserContext);
    const { clientsAPI } = providerClientsAPI;
    const { clientsFiltered, setClientsFiltered } = providerClientsFiltered;
    const { setSearchCriteria } = providerSearchCriteria;
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const searchAthlete = (query: string) => {
        setSearchCriteria(query);
        if (!query)
            return setClientsFiltered(clientsAPI);
        return setClientsFiltered(clientsFiltered.filter(((a: { nickname: string; }) => { return a.nickname.toLowerCase().includes(query.toLowerCase()) })));
    }

    return (
        <>
            <AppBar position="absolute" open={open} sx={{ boxShadow: '0px 0px 0px 0px' }}>
                <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed
                        backgroundColor: '#FFFFFF',
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        component="img"
                        src={metricMateLogo}
                        alt="logo"
                        sx={{
                            width: '80px',
                            height: '80px',
                            marginLeft: '20px'
                        }}
                    />
                    <SearchBar searchAthlete={searchAthlete} />
                </Toolbar>
            </AppBar>
            <Drawer variant='permanent' open={open} PaperProps={{
                sx: {
                    borderColor: "white"
                }
            }}>
                <Toolbar
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider sx={{ borderColor: 'white' }} />
                <List >
                    <MenuListItems />
                </List>
            </Drawer>

        </>
    )
}