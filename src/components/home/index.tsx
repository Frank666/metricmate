import React, {
    useContext,
    useEffect,
    useState
} from 'react';
import {
    UserContext
} from '../../hooks/userContext';
import {
    TrainersService
} from '../../openapi/services/TrainersService'
import {
    isNil,
} from 'lodash';
import DashboardAthletes from './dashboardAthletes'
import Container from '@mui/material/Container';

function DashboardContent() {
    const { providerUser, providerClientsAPI, providerClientsFiltered, providerSearchCriteria } = useContext(UserContext);
    const { user } = providerUser;
    const { clientsAPI, setClientsAPI } = providerClientsAPI;
    const { clientsFiltered, setClientsFiltered } = providerClientsFiltered;
    const { searchCriteria } = providerSearchCriteria;
    const [trainer, setTrainer] = useState(null);

    useEffect(() => {
        const fetchAthletes = async () => {
            var getTrainerResponse = await TrainersService.getTrainers1(user.user.userId, null);
            if (!isNil(getTrainerResponse)) {
                setTrainer(getTrainerResponse);
            }

            var athletesResponse = await TrainersService.getTrainerAthletes(getTrainerResponse.trainerId, null, null);
            if (!isNil(athletesResponse)) {
                setClientsAPI(athletesResponse);
                setClientsFiltered(athletesResponse);
            }
        }

        fetchAthletes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const athletesData = searchCriteria?.length > 1 ? clientsFiltered : clientsAPI;
    return (
        <>
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
                {(trainer?.trainerId > 0 && !isNil(athletesData)) ? <DashboardAthletes athletes={athletesData} trainerId={trainer?.trainerId} /> : null}
            </Container >
        </>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}