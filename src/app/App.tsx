import React, { Suspense, useContext, useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import { ThemeContext } from '../shared/ThemeProvider/context/ThemeContext';
import { useTheme } from '../shared/ThemeProvider/hook/useTheme';
import classNames from 'classnames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NavBar } from 'widgets/NavBar';



const App = () => {
    const{ theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', theme)}>
            <NavBar/>
            <button onClick={toggleTheme}>Tap</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
