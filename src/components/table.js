import React from 'react';
import "../App.css";

const Table = (props) => {
    return (
        <thead >
            <tr>
                <th scope="col"></th>
                <th scope="col"> <a href="#name" className="sortBtn" onClick={() => props.sortTable('first')}>First Name</a> </th>
                <th scope="col"> <a href="#name" className="sortBtn" onClick={() => props.sortTable('last')}>Last Name</a> </th>
                <th scope="col"> <a href="#name" className="sortBtn" onClick={() => props.sortTable('email')}>Email</a> </th>
                <th scope="col">Phone</th>
                <th scope="col">ID</th>
            </tr>
        </thead>
    );
}
export default Table;