import React from 'react';
import { TableCol, TableHeading, TableRow } from "./../"


const TableHeader = ({ headerList }) => {
    return (
        <TableRow className="tableRow flex-row tableHeading">
            {
                headerList.map((header, index) => <TableCol key={index} className={header === "Project" ? 'flexTwo' : 'flexOne'}>
                    <TableHeading heading={header} />
                </TableCol>)
            }
        </TableRow>
    );
}

export default TableHeader;