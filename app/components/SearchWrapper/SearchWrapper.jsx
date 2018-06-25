import React from 'react';
import { FormGroup, InputGroup, DropdownButton, FormControl, MenuItem } from "react-bootstrap"

import { SearchInput } from "./../"
const SearchWrapper = ({ search, onSearchHandler, placeHolder }) => {
    return (
        <form className="flex-row searchWrapper">
            <div style={{ width: '10%' }}>
                <DropdownButton
                    id="input-dropdown-addon"
                    title="filter Projects"
                    componentClass={InputGroup.Button}
                >
                    <MenuItem>Item 1</MenuItem>
                    <MenuItem>Item 2</MenuItem>
                    <MenuItem>Item 3</MenuItem>
                </DropdownButton>
            </div>
            <FormControl type="text" value={search} onChange={onSearchHandler} placeholder={placeHolder} />
        </form>
    );
}

export default SearchWrapper;