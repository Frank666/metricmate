import React, {
    useEffect,
    useState
} from 'react';
import {
    Button,
} from '@mui/material'
import { WorkoutsService } from '../../openapi/services/WorkoutsService';
import { Workout as WorkoutModel } from '../../openapi/models/Workout';
import Workout from './workout'
import { map } from 'lodash';

export default function Index() {
    const [workouts, setWorkouts] = useState(null);


    const getWorkoutsList = async () => {
        try {
            var getWorkouts = await WorkoutsService.getWorkouts();
            setWorkouts(getWorkouts);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getWorkoutsList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const newWorkout = () => {

    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'end', width: '97.5%', paddingTop: '20px' }}>
                <Button onClick={(e) => { newWorkout(); }} variant='contained' sx={{ marginTop: '10px' }} color='success'>Add Workout</Button>
            </div>
            {
                map(workouts, (workout: WorkoutModel) => (
                    <Workout workouts={workout} />
                ))}
        </>
    )
}