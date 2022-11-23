import {
    useLocation
} from 'react-router-dom'
import Index from '../components/workoutsHistory/index'


export default function WorkoutsHistory() {
    const location = useLocation();

    return (
        <Index athlete={location.state.athlete} athleteNickName={location.state.athleteNickName} trainerId={location.state.trainerId} />
    )
}