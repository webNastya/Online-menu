import { Suspense } from 'react';
import {Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from '../shared/config/ThemeProvider/hook/useTheme';
import classNames from 'classnames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NavBar } from 'widgets/NavBar';
import { ErrorPage } from 'pages/ErrorPage';
import { Loader } from 'widgets/Loader';
import { AdminProductsPage } from 'pages/Admin/Product';
import { AdminCategoriesPage } from 'pages/Admin/Category';
import { AdminPrivateRoute } from './providers/AdminPrivateRoute';
import { LoginPage } from 'pages/LoginPage';



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
                        <Route path={'login'} element={<LoginPage />} />
                        <Route path={'admin'} element={<AdminPrivateRoute/>}>
                            <Route path={'products'} >
                                <Route index element={<AdminProductsPage />}/>
                            </Route>
                            <Route path={'categories'} >
                                <Route index element={<AdminCategoriesPage />}/>
                            </Route>
                        </Route>
                        <Route path={'*'} element={<ErrorPage />} />
                    </Routes>
                </Suspense>
            </div>
            
        </div>
    );
};

export default App;
