import { Athlete } from '../../openapi/models/Athlete';
import {
    map
} from 'lodash';
import CardAthlete from './cardAthlete';
import Grid from '@mui/material/Grid';
import usePagination from '../../hooks/usePagination';
import Paginator from '../shared/paginator'
import Stack from '@mui/material/Stack';

interface Athletes {
    athletes: Array<Athlete>;
    trainerId: number;
}

const ITEMS_PER_PAGE = 12;

export default function DashboardAthletes(props: Athletes) {
    const { athletes, trainerId } = props;
    const {
        currentPage, getCurrentData, changePage, pageCount,
    } = usePagination({ data: athletes, itemsPerPage: ITEMS_PER_PAGE });
    const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => changePage(value);

    return (
        <Grid container spacing={3}>
            {
                map(getCurrentData(), (athlete) => (
                    <Grid item xs={12} md={4} lg={4} >
                        <CardAthlete athlete={athlete} trainerId={trainerId} />
                    </Grid>
                ))
            }
            <Grid item xs={12} md={12} lg={12} >
                <Stack spacing={2}>
                    <Paginator
                        pageCount={pageCount}
                        onPageChange={onPageChange}
                        currentPage={currentPage}
                    />
                </Stack>
            </Grid>
        </Grid>
    )
}