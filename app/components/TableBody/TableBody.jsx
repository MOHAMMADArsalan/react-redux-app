import React from 'react';

import { TableRow, TableCol, Category, ProjectWrapper, ExpertWrapper } from "./../"

const TableBody = ({ list }) => {
    return (
        <React.Fragment>
            {list.map((data, index) => <TableRow key={index}>
                <TableCol >
                    <Category {...data.category} />
                </TableCol>
                <TableCol className="flexTwo">
                    <ProjectWrapper {...data.project} limit={30} />
                </TableCol>
                <TableCol >
                    <ExpertWrapper {...data.user} />
                </TableCol>
                <TableCol >{data.submitted}</TableCol>
                <TableCol >{data.updatedAt}</TableCol>
                <TableCol >{data.deadline}</TableCol>
                <TableCol >{data.completed ? 'Completed' : 'Not Completed'}</TableCol>
            </TableRow>)}
        </React.Fragment>
    );
}

export default TableBody;