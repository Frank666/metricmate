import {
    useLocation
} from 'react-router-dom'
import Index from '../components/clients/index'


export default function Clients() {
    const location = useLocation();

    return (
        <Index athlete={location.state.athlete} athleteNickName={location.state.athleteNickName} trainerId={location.state.trainerId} />
    )
}