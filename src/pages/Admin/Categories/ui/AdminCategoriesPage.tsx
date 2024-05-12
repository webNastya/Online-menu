import classNames from 'classnames';
import cls from './AdminCategoriesPage.module.scss';
import { AdminCategoriesList } from 'widgets/Categories/Admin';


const AdminCategoriesPage = () => {

    return (
        <div className={classNames(cls.AdminCategoriesPage)}>
            <AdminCategoriesList />
        </div>
    );
};

export default AdminCategoriesPage;
