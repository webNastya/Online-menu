import cls from './AdminProductsPage.module.scss';
import { AdminProductList } from 'widgets/Product/Admin';
import { AdminNavBar } from "widgets/NavBar/Admin/ui/AdminNavBar";


const AdminProductsPage = () => {
    return (
        <div className={cls.AdminProductsPage}>
            <AdminNavBar/>
            <AdminProductList />
        </div>
    );
};

export default AdminProductsPage;
