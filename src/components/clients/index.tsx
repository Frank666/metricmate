import React, {
    useEffect,
    useState
} from 'react'
import {
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from '@mui/material';
import {
    AthletesApiService
} from '../../openapi/services/AthletesApiService'
import {
    isNil,
    map
} from 'lodash'
import {
    useNavigate,
} from "react-router-dom";
import { Athlete } from '../../openapi/models/Athlete';
import { BreadcrumbsModel } from '../../models/breadcrumbsModel'
import { Workout } from '../../openapi/models/Workout';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CustomBreadcrumbs from '../shared/breadcrumbs'
import CardAthlete from '../home/cardAthlete';

interface AtheleteDetail {
    athlete: Athlete;
    athleteNickName: string;
    trainerId: number;
}

export default function Clients(props: AtheleteDetail) {
    const { athlete, athleteNickName, trainerId } = props;
    const [athleteWorkouts, setAthleteWorkouts] = useState(null);
    const clientBreadcrumbs: BreadcrumbsModel[] = [];
    const navigate = useNavigate();
    const from = "/workouts-history";

    clientBreadcrumbs.push({
        to: '/dashboard',
        name: 'Clients'
    });
    clientBreadcrumbs.push({
        to: null,
        name: athleteNickName
    });

    const getAthleteWorkouts = async () => {
        try {
            var getAthleteWorkouts = await AthletesApiService.getAthleteAssignedWorkouts(trainerId, athlete.athleteId);
            setAthleteWorkouts(getAthleteWorkouts);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getAthleteWorkouts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const goToWorkoutsHitory = () => {
        if (!isNil(athlete)) {
            navigate(from, { state: { athlete, athleteNickName, trainerId } });
        }
    }

    const disabledWorktoutHistory = (isNil(athleteWorkouts) || athleteWorkouts.length === 0) ? true : false;

    return (
        <>
            <CustomBreadcrumbs model={clientBreadcrumbs} />
            <Grid container spacing={3}>
                <Paper sx={{
                    p: 2,
                    display: 'flex',
                    borderRadius: '12px',
                    alignItems: 'center',
                    width: '95%',
                    marginTop: '40px',
                    marginLeft: '40px'
                }}>
                    <Grid container spacing={4} >
                        <Grid item xs={12} md={4} lg={4} >
                            <Typography>
                                <CardAthlete athlete={athlete} trainerId={trainerId} />
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={8}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '22px', paddingTop: '10px' }} display='inline' gutterBottom>
                                FitnessGoal:
                                <Typography sx={{ paddingTop: '10px', marginLeft: '10px' }} display='inline'>
                                    {athlete.fitnessGoal}
                                </Typography>
                            </Typography>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '22px', paddingTop: '10px' }} gutterBottom>
                                Assigned Workout(s)
                            </Typography>
                            {
                                !disabledWorktoutHistory ?
                                    <>
                                        <TableContainer component={Paper} sx={{ width: '100%' }}>
                                            <Table>
                                                <TableBody>
                                                    {map(athleteWorkouts, (workout: Workout) => (
                                                        <TableRow
                                                            key={workout.workoutId}
                                                            sx={{
                                                                '&:last-child td, &:last-child th': { border: 0 }, "&:hover": {
                                                                    backgroundColor: "cyan !important",
                                                                }
                                                            }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                {workout.name}
                                                            </TableCell>
                                                            <TableCell align="right" component="th" scope="row">
                                                                <EditIcon />
                                                                <DeleteForeverIcon />
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <div style={{ display: 'flex', justifyContent: 'end' }}>
                                            <Button onClick={(e) => { goToWorkoutsHitory(); }} variant='contained' sx={{ marginTop: '10px' }} color='success'>Workouts History</Button>
                                        </div>
                                    </>
                                    :
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '22px', paddingTop: '10px' }} gutterBottom>
                                        No assigned workouts
                                    </Typography>
                            }

                        </Grid>
                    </Grid>
                </Paper>
            </Grid >
        </>
    )
}