import React, {
    useContext
} from 'react';
import {
    UserContext
} from '../../hooks/userContext';
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AuthManager from '../../shared/authManager';
import firebase from '../../services/firebase';

export default function MenuListItems() {
    const { providerAuth, providerUser, providerFirebase } = useContext(UserContext);
    const { setAuth } = providerAuth;
    const { setUser } = providerUser;
    const { setPhotoUser } = providerFirebase;


    const logout = async () => {
        AuthManager.getInstance().setToken('');
        AuthManager.getInstance().setRefreshToken('');
        await firebase.auth().signOut();
        setUser(null);
        setPhotoUser(null);
        setAuth(false)
    }

    return (
        <React.Fragment>
            <Link to="/dashboard">
                <ListItemButton>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
            </Link>
            <Link to="/dashboard">
                <ListItemButton >
                    <ListItemIcon >
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Clients" />
                </ListItemButton>
            </Link>
            <Link to="/dashboard" >
                <ListItemButton>
                    <ListItemIcon >
                        <FitnessCenterIcon />
                    </ListItemIcon>
                    <ListItemText primary="Workouts" />
                </ListItemButton>
            </Link>
            <Link to="/dashboard" >
                <ListItemButton>
                    <ListItemIcon >
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItemButton>
            </Link>
            <Link to="/dashboard" >
                <ListItemButton onClick={logout}>
                    <ListItemIcon >
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </Link>
        </React.Fragment>
    )
}