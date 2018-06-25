import React from 'react';

import { tableHeaders, tableData } from "./../../config/constants";
import { TableRow , TableCol , TableHeader , TableBody, SearchWrapper } from "./../"

const Table = ({ list , search , onSearchHandler , placeHolder}) => {
    return (
        <React.Fragment>
            <SearchWrapper search={search} onSearchHandler={onSearchHandler} placeHolder={placeHolder} />
            <TableHeader headerList={tableHeaders}/> 
            <TableBody list={tableData}/>
        </React.Fragment>
    );
}

export default Table;