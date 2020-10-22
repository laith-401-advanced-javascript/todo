import React, { useContext } from 'react';
import { PaginationContext } from '../../settings/paggination';

function ChengeNumberOfPages() {

    const pagination = useContext(PaginationContext);

    const changHandler = (e) => {
        pagination.setItem(e.target.value)
    }
    return (
        <>

        {/* <Dropdown onChange={changHandler}>
        <Dropdown.Toggle variant="success" id="dropdown-basic"> 
          select card Number
       </Dropdown.Toggle>

        <Dropdown.Menu   >
          <Dropdown.Item value='3'>3</Dropdown.Item>
          <Dropdown.Item value='5'>5</Dropdown.Item>
          <Dropdown.Item value='7'>7</Dropdown.Item>
        </Dropdown.Menu>

         </Dropdown>   */}
 
         <select onChange={changHandler}>
                <option value='3'>3</option>
                <option value='5'>5</option>
                <option value='7'>7</option>
            </select>
       Select Card Number  


        </>
    );
}
export default ChengeNumberOfPages;