import cls from './AdminCategoriesPage.module.scss';
import { AdminCategoryList } from 'widgets/Category/Admin';


const AdminCategoriesPage = () => {

    return (
        <div className={cls.AdminCategoriesPage}>
            <AdminCategoryList />
        </div>
    );
};

export default AdminCategoriesPage;
