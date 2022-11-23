import { useState } from 'react';


interface Pagination {
    data: Array<any>;
    itemsPerPage: number;
}

const usePagination = (props: Pagination) => {
    const { data, itemsPerPage } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const itemCount = data.length;

    /**
     * Returns data for the current page
     * @returns {Array}
     */
    const getCurrentData = () => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return data.slice(start, end);
    };

    /**
     * Sets the current page
     * @param {number} pageNumber - The current page number
     */
    const changePage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    /**
     * The total page count
     * @type {number}
     */
    const pageCount = Math.ceil(itemCount / itemsPerPage);

    return {
        currentPage, getCurrentData, changePage, pageCount,
    };
};

export default usePagination;