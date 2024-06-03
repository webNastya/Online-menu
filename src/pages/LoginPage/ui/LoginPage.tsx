import cls from './LoginPage.module.scss';
import { LoginForm } from 'widgets/LoginForm';


const LoginPage = () => {
    return (
        <div className={cls.LoginPage}>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
