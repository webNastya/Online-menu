import cls from './AdminProductsPage.module.scss';
import { AdminProductList } from 'widgets/Product/Admin';


const AdminProductsPage = () => {

    return (
        <div className={cls.AdminProductsPage}>
            <AdminProductList />
        </div>
    );
};

export default AdminProductsPage;
