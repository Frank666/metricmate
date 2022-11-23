import { map } from 'lodash';
import { UserWorkout } from '../../openapi/models/UserWorkout';
import {
    Divider,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import moment from 'moment';

interface WorkoutsHistory {
    selectedWorkout: number;
    workouts: UserWorkout[];
    selectWorkout: (workoutId: number) => void;
}

export default function Workouts(props: WorkoutsHistory) {
    const { selectedWorkout, workouts, selectWorkout } = props;

    const formatWorkoutDate = (date: string) => {
        return moment(date).format('MM/DD/yyyy hh:mm A');
    }

    return (
        <>
            {map(workouts, (workout: UserWorkout) => (
                <ListItemButton
                    selected={workout.userWorkoutId === selectedWorkout}
                    onClick={() => { selectWorkout(workout.userWorkoutId) }}
                >
                    <ListItemText
                        sx={{
                            color: '#6D7188', borderBottom: "1px solid rgb(212, 212, 212)"
                        }}
                        primary={formatWorkoutDate(workout.endTime)}
                    />
                    <ListItemIcon>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <Divider />
                </ListItemButton>
            ))
            }
        </>
    )
}