import { signInWithGoogle } from '../../services/firebase.js';
import GoogleButton from 'react-google-button'


const FirebaseGLogin = () => {
    return (
        <GoogleButton onClick={signInWithGoogle} />
    )
}

export default FirebaseGLogin;