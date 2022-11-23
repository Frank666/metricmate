import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@mui/material/Pagination';

interface PaginatorProps {
    pageCount: number;
    onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
    currentPage: number;
}

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             marginTop: theme.spacing(2),
//         },
//     },
//     pagination: {
//         display: 'flex',
//         justifyContent: 'center',
//     },
// }));

const Paginator = (props: PaginatorProps) => {
    const { pageCount, onPageChange, currentPage } = props;

    return (
        <div>
            <Pagination
                count={pageCount}
                onChange={onPageChange}
                page={currentPage}
                color="primary"
                //className={classes.pagination}
                showFirstButton
                showLastButton
                shape="rounded"
            />
        </div>
    );
};

export default Paginator;