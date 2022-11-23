import Menu from '../components/home/menu'
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom'
import { Toolbar } from '@mui/material';
import {
    createTheme,
    ThemeProvider
} from '@mui/material/styles';

const mdTheme = createTheme({
    palette: {
        primary: {
            main: '#edf2ff',
        },
        secondary: {
            main: '#edf2ff',
        },
    },
});

export default function Home() {
    return (
        <>
            <ThemeProvider theme={mdTheme}>
                <Box sx={{ display: 'flex' }}>
                    <Menu />
                    <Box
                        component="main"
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'light'
                                    ? theme.palette.grey[100]
                                    : theme.palette.grey[900],
                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto',
                        }}
                    >
                        <Toolbar />
                        <Outlet />
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    )
}