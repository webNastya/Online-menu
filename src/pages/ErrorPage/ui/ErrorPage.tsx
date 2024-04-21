import classNames from 'classnames';
import cls from './ErrorPage.module.scss';


export const ErrorPage = () => {

    return (
        <div className={classNames(cls.ErrorPage)}>
            Что-то пошло не так
        </div>
    );
};
