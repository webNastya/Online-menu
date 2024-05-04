import React from 'react';
import { ProductList } from 'features/ProductList';
import { Categories } from 'widgets/Categories';

const MainPage = () => {
    return (
        <div>
            <Categories />
            <ProductList />
        </div>
    );
};

export default MainPage;
