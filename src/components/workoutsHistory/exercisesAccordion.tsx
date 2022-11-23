import { map } from 'lodash';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExerciseChart from './exerciseChart'
import { UserExerciseSet } from '../../openapi/models/UserExerciseSet';

interface ExercisesAccordionProps {
    exercises: string[];
    exercisesComplete: UserExerciseSet[];
}

export default function ExercisesAccordion(props: ExercisesAccordionProps) {
    const { exercises, exercisesComplete } = props;

    return (
        <>
            {map(exercises, (exercise: string) => (
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{exercise}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ExerciseChart exercise={exercise} exercisesComplete={exercisesComplete} />
                    </AccordionDetails>
                </Accordion>
            ))
            }
        </>
    )
}