import classNames from 'classnames';
import cls from './LoginPage.module.scss';
import { Login } from 'widgets/Login';


const LoginPage = () => {
    return (
        <div className={classNames(cls.LoginPage)}>
            <Login />
        </div>
    );
};

export default LoginPage;
