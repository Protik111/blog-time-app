import React from 'react';

const Paginations = ({postPerPage, totalPost, handlePaginate}) => {
    const totalPages = [];

    for(let i = 1; i <= Math.ceil(totalPost / postPerPage); i++){
        totalPages.push(i);
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {totalPages.map(number => <li key={number}>
                    <a onClick={() => handlePaginate(number)} href="#" className='page-link'>{number}</a>
                </li>)}
            </ul>
        </nav>
    );
};

export default Paginations;