import React, { useContext } from 'react';
import { PaginationContext } from '../../settings/paggination';
// import { Pagination } from 'react-bootstrap';

const TogglePagination = ({ totalItems }) => {

    const pageNumbers = [];
    const pagination = useContext(PaginationContext);
    for (let i = 1; i <= Math.ceil(totalItems / pagination.itemPerPage); i++) {
        pageNumbers.push(i);
    }

        // return (
        //     <>
        //         <Pagination>
        //             <Pagination.Prev />
        //             <Pagination.Item active>{1}</Pagination.Item>
        //             <Pagination.Item>{2}</Pagination.Item>
        //             <Pagination.Item >{3}</Pagination.Item>
        //             <Pagination.Next />
        //         </Pagination>
        //     </>
        // )

        return (
            <nav>
              <ul className='pagination'>
                {pageNumbers.map(number => (
                  <li key={number} className='page-item'>
                    <a onClick={() => pagination.paginate(number)} className='page-link'>
                      {number}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className='pagination'>
                  <li className='page-item'>
                    <a onClick={ pageNumbers.length != pagination.currentPage ? () => pagination.paginate(pagination.currentPage++): () => pagination.paginate(pagination.currentPage)} className='page-link'>
                      Next
                    </a>
                  </li>
                  <li  className='page-item'>
                    <a onClick={pagination.currentPage > 1 ? () => pagination.paginate(pagination.currentPage--): () => pagination.paginate(pagination.currentPage)} className='page-link'>
                      Previous
                    </a>
                  </li>
              </ul>
            </nav>
          );
    
}

export default TogglePagination;
