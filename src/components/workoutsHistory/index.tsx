import React, {
    useEffect,
    useState
} from 'react'
import {
    Box,
    Grid,
    List,
    Paper,
    Tab,
    Tabs,
} from '@mui/material';
import {
    AthletesApiService
} from '../../openapi/services/AthletesApiService'
import {
    isNil,
} from 'lodash'
import { Athlete } from '../../openapi/models/Athlete';
import { BreadcrumbsModel } from '../../models/breadcrumbsModel'
import { UserWorkout } from '../../openapi/models/UserWorkout';
import { UserExerciseSetsService } from '../../openapi/services/UserExerciseSetsService';
import { UserExerciseSet } from '../../openapi/models/UserExerciseSet';
import CustomBreadcrumbs from '../shared/breadcrumbs'
import moment from 'moment';
import Workouts from './workouts'
import UserExercisteSet from './userExercisteSet'
import ExercisteSetDetail from './exerciseSetDetail'
import ExercisesAccordion from './exercisesAccordion'

interface AtheleteDetail {
    athlete: Athlete;
    athleteNickName: string;
    trainerId: number;
}

export default function Index(props: AtheleteDetail) {
    const { athlete, athleteNickName, trainerId } = props;
    const [athleteWorkouts, setAthleteWorkouts] = useState(null);
    const [selectedWorkout, setSelectedWorkout] = React.useState(null);
    const [userExerciseSet, setUserExerciseSet] = React.useState(null);
    const [distinctExercises, setDistinctExercises] = React.useState(null);
    const [userExerciseComplete, setUserExerciseComplete] = React.useState(null);
    const clientBreadcrumbs: BreadcrumbsModel[] = [];

    clientBreadcrumbs.push({
        to: '/dashboard',
        name: 'Clients'
    });
    clientBreadcrumbs.push({
        to: '-1',
        name: athleteNickName
    });

    clientBreadcrumbs.push({
        to: null,
        name: 'Workouts History'
    });

    const getAthleteCompletedWorkouts = async () => {
        try {
            var getAthleteWorkouts = await AthletesApiService.getAthleteCompletedWorkouts(trainerId, athlete.athleteId);
            setAthleteWorkouts(getAthleteWorkouts);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getAthleteCompletedWorkouts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getDetailWorkout = async () => {
        try {
            var detailWorkout = await UserExerciseSetsService.getUserExerciseSets(athlete.athleteId, selectedWorkout);
            const exercises = detailWorkout.map((item: UserExerciseSet) => item.exerciseName).filter((value: any, index: any, self: any) => self.indexOf(value) === index)
            if (isNil(distinctExercises)) {
                setDistinctExercises(exercises);
                setUserExerciseComplete(detailWorkout);
            }
            setUserExerciseSet(detailWorkout);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getDetailWorkout();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedWorkout]);


    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event: any, newTabIndex: number) => {
        setTabIndex(newTabIndex);
    };

    const getIntensity = () => {
        return athleteWorkouts?.filter((a: UserWorkout) => a.userWorkoutId === selectedWorkout)[0]?.intensity ?? null;
    }

    const getCaloricExpenditure = () => {
        return athleteWorkouts?.filter((a: UserWorkout) => a.userWorkoutId === selectedWorkout)[0]?.caloricExpenditure ?? null;
    }

    const getWorkoutStartTime = () => {
        return athleteWorkouts?.filter((a: UserWorkout) => a.userWorkoutId === selectedWorkout)[0]?.startTime ?? null;
    }

    const getWorkoutCaloricExpenditure = () => {
        return athleteWorkouts?.filter((a: UserWorkout) => a.userWorkoutId === selectedWorkout)[0]?.endTime ?? null;
    }

    const getExerciseName = () => {
        if (userExerciseSet?.length > 0)
            return userExerciseSet?.filter((a: UserExerciseSet) => a.userWorkoutId === selectedWorkout)[0]?.exerciseName ?? null;
        return '';
    }

    const getWeightObserved = () => {
        if (userExerciseSet?.length > 0)
            return `${userExerciseSet?.filter((a: UserExerciseSet) => a.userWorkoutId === selectedWorkout)[0]?.weightObserved} lbs` ?? null;
        return '';
    }

    const getRepetitionsObserved = () => {
        if (userExerciseSet?.length > 0)
            return `${userExerciseSet?.filter((a: UserExerciseSet) => a.userWorkoutId === selectedWorkout)[0]?.repetitionsObserved} reps` ?? null;
        return '';
    }

    const getUserExercisteStart = () => {
        if (userExerciseSet?.length > 0)
            return userExerciseSet?.filter((a: UserExerciseSet) => a.userWorkoutId === selectedWorkout)[0]?.startTime ?? null;
        return '';
    }

    const getUserExercisteEnd = () => {
        if (userExerciseSet?.length > 0)
            return userExerciseSet?.filter((a: UserExerciseSet) => a.userWorkoutId === selectedWorkout)[0]?.endTime ?? null;
        return '';
    }

    const getUserExerciseDuration = (isUserExercisteSet: boolean = false) => {
        const start = moment(!isUserExercisteSet ? getWorkoutStartTime() : getUserExercisteStart());
        const end = moment(!isUserExercisteSet ? getWorkoutCaloricExpenditure() : getUserExercisteEnd());
        const diff = moment.duration(end.diff(start));
        // maybe days is not a 'logical' scenario but let's put a defensive check
        const days = parseInt(diff.asDays().toString());
        const hours = parseInt(diff.asHours().toString());
        const minutes = parseInt(diff.asMinutes().toString());
        if (!isUserExercisteSet) {
            if (minutes < 60) {
                return minutes > 1 ? `${minutes} minutes` : `${minutes} minute`;
            } else if (hours < 24) {
                return hours > 1 ? `${hours} hours` : `${hours} hour`;
            } else {
                return days > 1 ? `${days} days` : `${days} day`;
            }
        } else {
            if (userExerciseSet?.length > 0)
                return moment.utc(moment(end, "DD/MM/YYYY mm:ss").diff(moment(start, "DD/MM/YYYY HH:mm:ss"))).format("mm:ss");
            return '';
        }
    }

    const selectWorkout = (workoutId: number) => {
        setSelectedWorkout(workoutId);
    }

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
                            <Tabs value={tabIndex} onChange={handleTabChange}>
                                <Tab label="Workout" sx={{ backgroundColor: tabIndex === 0 ? '#BB261A' : null, color: '#6D7188' }} />
                                <Tab label="Exercises" sx={{ backgroundColor: tabIndex === 1 ? '#BB261A' : null, color: '#6D7188' }} />
                            </Tabs>
                        </Grid>
                        <Grid item xs={12} md={4} lg={8}>
                        </Grid>
                        <Grid item xs={12} md={4} lg={12}  >
                            {tabIndex === 0 && (
                                <Grid container spacing={4} >
                                    <Grid item xs={12} md={4} lg={4} sx={{ borderRight: "2px solid rgb(212, 212, 212)" }}>
                                        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', }}>
                                            <List component="nav" aria-label="main mailbox folders"
                                                sx={{
                                                    '&& .Mui-selected, && .Mui-selected:hover': {
                                                        bgcolor: '#F7D1D0',
                                                    },
                                                }}>
                                                <Workouts
                                                    workouts={athleteWorkouts}
                                                    selectedWorkout={selectedWorkout}
                                                    selectWorkout={selectWorkout} />
                                            </List>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4} lg={8} >
                                        <UserExercisteSet
                                            selectedWorkout={selectedWorkout}
                                            calories={getCaloricExpenditure()}
                                            duration={getUserExerciseDuration()}
                                            intensity={getIntensity()} />
                                        {
                                            ((userExerciseSet?.length > 0 && selectedWorkout) ?
                                                <ExercisteSetDetail
                                                    exerciseName={getExerciseName()}
                                                    weightObserved={getWeightObserved()}
                                                    repetitionsObserved={getRepetitionsObserved()}
                                                    userExerciseDuration={getUserExerciseDuration(true)} />
                                                : null)
                                        }
                                    </Grid>
                                </Grid>
                            )}
                            {(tabIndex === 1 && (userExerciseSet?.length > 0))
                                ? <ExercisesAccordion exercises={distinctExercises} exercisesComplete={userExerciseComplete} /> : null
                            }
                        </Grid>
                    </Grid>
                </Paper>
            </Grid >
        </>
    )
}