import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from '@mui/material';
import { isNil } from 'lodash';
import SpeedIcon from '@mui/icons-material/SpeedOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

interface UserExerciseProps {
    selectedWorkout: number;
    intensity: number;
    calories: number;
    duration: string;
}

export default function UserExercisteSet(props: UserExerciseProps) {
    const { selectedWorkout, intensity, calories, duration } = props;
    return (
        (!isNil(selectedWorkout) ?
            <>
                <TableContainer component={Paper} sx={{ width: '100%' }}>
                    <Table>
                        <TableBody>
                            <TableRow
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 }, "&:hover": {
                                        backgroundColor: "cyan !important",
                                    }
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    <Typography display='flex'>
                                        <SpeedIcon /> Intensity
                                    </Typography>
                                </TableCell>
                                <TableCell align="right" component="th" scope="row">
                                    <Typography>
                                        {intensity}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 }, "&:hover": {
                                        backgroundColor: "cyan !important",
                                    }
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    <Typography display='flex'>
                                        <LocalFireDepartmentIcon />Calories
                                    </Typography>
                                </TableCell>
                                <TableCell align="right" component="th" scope="row">
                                    <Typography>
                                        {calories}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 }, "&:hover": {
                                        backgroundColor: "cyan !important",
                                    }
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    <Typography display='flex'>
                                        <AccessTimeIcon />
                                        Duration
                                    </Typography>
                                </TableCell>
                                <TableCell align="right" component="th" scope="row">
                                    <Typography>
                                        {duration}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </> : null
        )
    )
}