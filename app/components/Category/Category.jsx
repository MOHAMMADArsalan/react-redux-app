import React from 'react';
import { Price , CategoryType } from "./../"

const Category = ({ type, price }) => {
    return (
        <div className="caterogy">
            <CategoryType type={type} />
            <Price price={price} />
        </div>
    );
}

export default Category;