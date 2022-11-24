import React from 'react';
import Pagination from '@mui/material/Pagination';

interface PaginatorProps {
    pageCount: number;
    onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
    currentPage: number;
}


const Paginator = (props: PaginatorProps) => {
    const { pageCount, onPageChange, currentPage } = props;

    return (
        <>
            <Pagination
                count={pageCount}
                onChange={onPageChange}
                page={currentPage}
                color="primary"
                showFirstButton
                showLastButton
                shape="rounded"
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            />
        </>
    );
};

export default Paginator;