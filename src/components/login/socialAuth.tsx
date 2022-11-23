import React, {
    useEffect,
    useState,
    useContext
} from 'react';
import {
    Box,
    Stack,
    Snackbar
} from "@mui/material";
import {
    useLocation,
    useNavigate
} from "react-router-dom";
import {
    UserContext
} from '../../hooks/userContext';
import {
    AuthService
} from '../../openapi/index'
import AuthManager from '../../shared/authManager';
import FirebaseGLogin from './googleLogin'
import FirebaseFaceLogin from './facebookLogin'
import firebase from '../../services/firebase';

function SocialAuth() {
    const { providerAuth, providerUser, providerFirebase } = useContext(UserContext);
    const { setAuth } = providerAuth;
    const { setUser } = providerUser;
    const { setPhotoUser } = providerFirebase;

    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [msgPostion] = useState({
        vertical: 'top',
        horizontal: 'center',
    })
    const { vertical, horizontal, } = msgPostion;
    const from = location.state?.from?.pathname || "/dashboard";
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (userEmail !== null) {
                var authResponse = await AuthService.getAuthorize(userEmail);
                if (authResponse.success) {
                    setUser(authResponse);
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
                setPhotoUser(null)
                return null;
            }
            setPhotoUser(user?.photoURL)
            setUserEmail(user?.email);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Stack direction="row" spacing={4} sx={{ paddingRight: '30px' }}>
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
            </Stack>
            <Box sx={{ justifyContent: 'center', display: 'flex', width: '100%', paddingBottom: '20px' }}>
                <FirebaseGLogin />
            </Box>
            <Box sx={{ justifyContent: 'center', display: 'flex', width: '100%' }}>
                <FirebaseFaceLogin />
            </Box>
        </>
    );
};

export default SocialAuth;
