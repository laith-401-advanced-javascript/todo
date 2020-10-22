
import React, { useContext } from 'react';
import { PaginationContext } from '../../settings/paggination';

const TogglePagination = ({ totalItems }) => {

    const pageNumbers = [];
    const pagination = useContext(PaginationContext);
    for (let i = 1; i <= Math.ceil(totalItems / pagination.itemPerPage); i++) {
        pageNumbers.push(i);
    }

        return (
            <nav>
              <ul className='pagination'>
                {pageNumbers.map(number => (
                  <li key={number} className='page-item'>
                  {/* eslint-disable-next-line */}
                    <a href="" onClick={() => pagination.paginate(number)} className='page-link'>
                      {number}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className='pagination'>
                  <li className='page-item'>
                  {/* eslint-disable-next-line */}
                    <a href="" onClick={ pageNumbers.length !== pagination.currentPage ? () => pagination.paginate(pagination.currentPage++): () => pagination.paginate(pagination.currentPage)} className='page-link'>
                      Next
                    </a>
                  </li>
                  <li  className='page-item'>
                  {/* eslint-disable-next-line */}
                    <a href="" onClick={pagination.currentPage > 1 ? () => pagination.paginate(pagination.currentPage--): () => pagination.paginate(pagination.currentPage)} className='page-link'>
                      Previous
                    </a>
                  </li>
              </ul>
            </nav>
          );
    
}

export default TogglePagination;
