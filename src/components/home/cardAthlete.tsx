import React, {
    useEffect,
    useState
} from 'react'
import {
    Avatar,
    Grid,
    Paper,
    Typography,
} from '@mui/material';
import {
    AthletesApiService
} from '../../openapi/services/AthletesApiService'
import {
    useNavigate,
} from "react-router-dom";
import { isNil } from 'lodash';
import AccessTimeIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import moment from 'moment';
import PersonIcon from '@mui/icons-material/Person';
import SpeedIcon from '@mui/icons-material/SpeedOutlined';
import { Athlete } from '../../openapi/models/Athlete';


interface AthleteCard {
    athlete: any;
    trainerId: number;
}

export default function CardAthlete(props: AthleteCard) {
    const { athlete, trainerId } = props;
    const [completedWorkout, setCompletedWorkout] = useState(null);
    const navigate = useNavigate();
    const from = "/clients";

    const getAthleteData = async () => {
        try {
            var athleteData = await AthletesApiService.getAthleteCompletedWorkouts(trainerId, athlete.athleteId, 0, 1);
            athleteData.length === 0 ? setCompletedWorkout(null) : setCompletedWorkout(athleteData);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getAthleteData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getLastWorkTime = (lastWorkoutDataTime: string) => {
        if (!isNil(lastWorkoutDataTime)) {
            const currenDate = moment(new Date());
            const endDate = moment(lastWorkoutDataTime);
            const diff = moment.duration(currenDate.diff(endDate));
            const days = parseInt(diff.asDays().toString());
            const hours = parseInt(diff.asHours().toString());
            const minutes = parseInt(diff.asMinutes().toString());

            if (minutes < 60) {
                return minutes > 1 ? `${minutes} minutes` : `${minutes} minute`;
            } else if (hours < 24) {
                return hours > 1 ? `${hours} hours` : `${hours} hour`;
            } else {
                return days > 1 ? `${days} days` : `${days} day`;
            }
        }
    }

    const getBackgroundColor = (lastWorkoutDataTime: string) => {
        if (!isNil(lastWorkoutDataTime)) {
            const currenDate = moment(new Date());
            const endDate = moment(lastWorkoutDataTime);
            const diff = moment.duration(currenDate.diff(endDate));
            const days = parseInt(diff.asDays().toString());

            if (days < 3) {
                return '#EEA73B'
            } else if (days >= 3 && days <= 7) {
                return '#23B14B'
            } else if (days > 7) {
                return '#BB261A'
            }
        } else {
            return '#FFFFFF'
        }
    }

    const getFontColor = (color: string) => {
        return color === '#FFFFFF' ? '#6D7188' : '#FFFFFF'
    }

    const getUserFontColor = (color: string) => {
        return color === '#FFFFFF' ? '#BB261A' : '#FFFFFF'
    }

    const getIntensity = () => {
        return completedWorkout?.length > 0 ? completedWorkout[0].intensity : '';
    }

    const getCalories = () => {
        return completedWorkout?.length > 0 ? completedWorkout[0].caloricExpenditure : '';
    }

    const statusColor = getBackgroundColor(athlete.lastWorkoutDateTime);
    const fontColor = getFontColor(statusColor);
    const userfontColor = getUserFontColor(statusColor);

    const clientDetail = (athlete: Athlete, athleteNickName: string, trainerId: number) => {
        if (!isNil(athlete)) {
            navigate(from, { state: { athlete, athleteNickName, trainerId } });
        }
    }

    return (
        <>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 400,
                    borderRadius: '12px',
                    alignItems: 'center',
                    backgroundColor: statusColor,
                    cursor: 'pointer'
                }}
                onClick={(e) => { clientDetail(athlete, athlete?.nickname, trainerId); }}
            >
                <Avatar sx={{ height: '110px', width: '110px', backgroundColor: 'transparent', }} alt={"athlete"} src={window.location.origin + '/images/generic-avatar.png'} />
                <Typography sx={{ fontWeight: 'bold', fontSize: '22px', paddingTop: '10px', color: `${userfontColor}` }} gutterBottom>
                    {athlete?.nickname}
                </Typography>
                <Grid container>
                    <Grid item xs={4} md={4} lg={2} >
                        <PersonIcon fontSize='large' sx={{ color: `${fontColor}`, justifyContent: 'flex-end', display: 'flex', borderStyle: 'solid', borderColor: `${fontColor}`, borderWidth: 'thin' }} />
                    </Grid>
                    <Grid item xs={4} md={4} lg={6}>
                        <Typography sx={{ fontSize: '16px', verticalAlign: 'middle', alignItems: 'left', display: 'flex', paddingTop: '5px', color: `${fontColor}` }} gutterBottom>
                            PL: {athlete.powerLevel}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4} md={4} lg={2} >
                        <AccessTimeIcon fontSize='large' sx={{ color: `${fontColor}`, justifyContent: 'flex-end', display: 'flex', borderStyle: 'solid', borderColor: `${fontColor}`, borderWidth: 'thin' }} />
                    </Grid>
                    <Grid item xs={6} md={4} lg={8}>
                        <Typography sx={{ fontSize: '16px', verticalAlign: 'middle', alignItems: 'left', display: 'flex', paddingTop: '5px', color: `${fontColor}` }} gutterBottom>
                            Last workout: {getLastWorkTime(athlete.lastWorkoutDateTime)}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4} md={4} lg={2} >
                        <SpeedIcon fontSize='large' sx={{ color: `${fontColor}`, justifyContent: 'flex-end', display: 'flex', borderStyle: 'solid', borderColor: `${fontColor}`, borderWidth: 'thin' }} />
                    </Grid>
                    <Grid item xs={4} md={4} lg={6}>
                        <Typography sx={{ fontSize: '16px', verticalAlign: 'middle', alignItems: 'left', display: 'flex', paddingTop: '5px', color: `${fontColor}` }} gutterBottom>
                            Intensity: {getIntensity()}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4} md={4} lg={2} >
                        <LocalFireDepartmentIcon fontSize='large' sx={{ color: `${fontColor}`, justifyContent: 'flex-end', display: 'flex', borderStyle: 'solid', borderColor: `${fontColor}`, borderWidth: 'thin' }} />
                    </Grid>
                    <Grid item xs={4} md={4} lg={6}>
                        <Typography sx={{ fontSize: '16px', verticalAlign: 'middle', alignItems: 'left', display: 'flex', paddingTop: '5px', color: `${fontColor}` }} gutterBottom>
                            Calories: {getCalories()}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}