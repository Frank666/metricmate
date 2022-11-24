import { Workout as WorkoutModel } from '../../openapi/models/Workout';
import {
    Button,
    Grid,
    Paper,
    Typography,
} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccessTimeIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

interface WorkoutsProps {
    workouts: WorkoutModel;
}

export default function Workout(props: WorkoutsProps) {
    const { workouts } = props;
    console.log(workouts)
    return (
        <>
            <Grid container spacing={3}>
                <Paper sx={{
                    p: 2,
                    display: 'flex',
                    borderRadius: '12px',
                    textAlign: 'left',
                    width: '95%',
                    marginTop: '40px',
                    marginLeft: '40px',
                    '&:last-child td, &:last-child th': { border: 0 }, "&:hover": {
                        backgroundColor: "cyan !important",
                    }
                }}>
                    <Grid container spacing={4} >
                        <Grid item xs={12} md={12} lg={12} >
                            <Typography sx={{ fontWeight: 'bold', fontSize: '24px', paddingTop: '10px', display: 'inline' }} gutterBottom>
                                {workouts.name}
                            </Typography>
                            <Typography sx={{ paddingTop: '10px', color: '#6D7188', display: 'flex', justifyContent: 'space-between' }} >
                                <Typography sx={{ paddingTop: '10px', color: '#6D7188', display: 'inline-block' }} gutterBottom>
                                    {workouts.description}
                                </Typography>
                                <Typography sx={{ paddingTop: '10px', color: '#6D7188', display: 'inline-block', textAlign: 'end' }} gutterBottom>
                                    <ArrowForwardIosIcon fontSize='large' sx={{ paddingTop: '10px', color: '#6D7188' }} />
                                </Typography>
                            </Typography>
                            <Typography>
                            </Typography>
                            <Typography sx={{ paddingTop: '10px', display: 'inline', color: '#6D7188' }} gutterBottom>
                                <Button variant="contained" disabled>
                                    <LocalFireDepartmentIcon /> Intensity: {workouts.intensity}
                                </Button>
                            </Typography>
                            <Typography sx={{ paddingTop: '10px', display: 'inline', marginLeft: '20px', color: '#737686' }} gutterBottom>
                                <Button variant="contained" disabled >
                                    <AccessTimeIcon /> Duration: {workouts.duration}
                                </Button>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid >
        </>
    )
}