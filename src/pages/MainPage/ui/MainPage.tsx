import React from 'react';
import { CardsContainer } from 'features/CardsContainer';
import { Categories } from 'widgets/Categories';

const MainPage = () => {
    return (
        <div>
            <Categories />
            <CardsContainer />
        </div>
    );
};

export default MainPage;
