import React, { Suspense, useContext, useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from '../shared/config/ThemeProvider/hook/useTheme';
import classNames from 'classnames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NavBar } from 'widgets/NavBar';
import { ErrorPage } from 'pages/ErrorPage';
import { Loader } from 'widgets/Loader';



const App = () => {
    const{ theme } = useTheme()

    return (
        <div className={classNames('app', theme)}>
            <NavBar/>
            <div className="content">
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path={'/about'} element={<AboutPage />} />
                        <Route path={'/'} element={<MainPage />} />
                        <Route path={'*'} element={<ErrorPage />} />
                    </Routes>
                </Suspense>
            </div>
            
        </div>
    );
};

export default App;
