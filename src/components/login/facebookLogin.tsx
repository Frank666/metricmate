import { signInWithFacebook } from '../../services/firebase.js';
import styled from 'styled-components';

const BtnFacebook = styled.button`
    width: 225px;
    height:51px;  
    border-radius: 4px;
    background: #3b5998;
    color:white;
    border:0px transparent;  
    text-align: center;
    margin:5px;
    display: inline-block;
    cursor: pointer;
    &:hover{
        background: #3b5998;
        opacity: 0.6;
    }
`;

const FirebaseFaceLogin = () => {
    return (
        <BtnFacebook onClick={signInWithFacebook}>
            Sign in with facebook
        </BtnFacebook>
    )
}



export default FirebaseFaceLogin;