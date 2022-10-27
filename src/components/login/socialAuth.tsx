import React, { useEffect, useState, useContext } from 'react';
import { Stack, Snackbar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from '../../hooks/userContext';
import FirebaseGLogin from './googleLogin'
import FirebaseFaceLogin from './facebookLogin'
import firebase from '../../services/firebase';
import { AuthService } from '../../openapi/index'
import AuthManager from '../../shared/authManager';

function SocialAuth() {
    const { providerAuth, providerUser } = useContext(UserContext);
    const { setAuth } = providerAuth;
    const { setUser } = providerUser;

    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [msgPostion] = useState({
        vertical: 'top',
        horizontal: 'center',
    })
    const { vertical, horizontal, } = msgPostion;
    const from = location.state?.from?.pathname || "/";

    const [userEmail, setUserEmail] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            if (userEmail !== null) {
                var authResponse = await AuthService.getAuthorize(userEmail);
                if (authResponse.success) {
                    setUser(authResponse);
                    console.log(authResponse.token)
                    AuthManager.getInstance().setToken(authResponse.token);
                    AuthManager.getInstance().setRefreshToken(authResponse.refreshToken);
                    setAuth(true);
                    navigate(from, { replace: true });
                } else {
                    // user not valid
                    setIsOpen(true);
                    setErrorMessage(authResponse.errors[0]);
                }
            }
        }

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userEmail]);


    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user: any) => {
            if (!user) {
                setUser(null);
                setAuth(false);
                setUserEmail(null)
                return null;
            }
            setUserEmail(user?.email);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Stack direction="row" spacing={2}>
            {isOpen ?
                <Snackbar
                    //anchorOrigin={{ vertical, horizontal }}
                    open={isOpen}
                    message={errorMessage}
                    key={vertical + horizontal}
                    autoHideDuration={6000}
                />
                : null
            }
            <FirebaseGLogin />
            <FirebaseFaceLogin />
        </Stack>
    );
};

export default SocialAuth;
