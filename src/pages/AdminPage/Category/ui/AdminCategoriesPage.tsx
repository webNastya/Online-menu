import cls from './AdminCategoriesPage.module.scss';
import { AdminCategoryList } from 'widgets/Category/Admin';
import { AdminNavBar } from "widgets/NavBar/Admin/ui/AdminNavBar";


const AdminCategoriesPage = () => {
    return (
        <div className={cls.AdminCategoriesPage}>
            <AdminNavBar/>
            <AdminCategoryList />
        </div>
    );
};

export default AdminCategoriesPage;
