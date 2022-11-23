import {
    Typography,
} from '@mui/material';

interface ExerciseSetDetailDetailProps {
    exerciseName: string;
    weightObserved: string;
    repetitionsObserved: string;
    userExerciseDuration: string;
}

export default function exerciseSetDetail(props: ExerciseSetDetailDetailProps) {
    const { exerciseName, weightObserved, repetitionsObserved, userExerciseDuration } = props;
    return (
        <>
            <Typography sx={{ fontWeight: 'bold', fontSize: '22px', paddingTop: '10px', textAlign: 'left' }} gutterBottom>
                Exercises
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: '22px', paddingTop: '10px', textAlign: 'left' }} gutterBottom>
                {exerciseName}
                <Typography sx={{ paddingTop: '10px', marginLeft: '10px', textAlign: 'left', display: 'inline' }} >
                    {weightObserved}
                </Typography>
            </Typography>
            <Typography sx={{ paddingTop: '10px', textAlign: 'left' }} gutterBottom>
                {repetitionsObserved}
                <Typography sx={{ paddingTop: '10px', marginLeft: '10px', textAlign: 'left', display: 'inline' }} >
                    {userExerciseDuration}
                </Typography>
            </Typography>
        </>
    )
}