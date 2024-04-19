import React, { Suspense, useContext, useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import { ThemeContext } from '../shared/config/ThemeProvider/context/ThemeContext';
import { useTheme } from '../shared/config/ThemeProvider/hook/useTheme';
import classNames from 'classnames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NavBar } from 'widgets/NavBar';
import { Button, ThemeButton } from 'shared/ui/Button';



const App = () => {
    const{ theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', theme)}>
            <NavBar/>
            <Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>Tap</Button>
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
