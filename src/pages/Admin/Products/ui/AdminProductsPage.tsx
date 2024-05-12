import classNames from 'classnames';
import cls from './AdminProductsPage.module.scss';
import { AdminProductList } from 'widgets/ProductList/Admin';


const AdminProductsPage = () => {

    return (
        <div className={classNames(cls.AdminProductsPage)}>
            <AdminProductList />
        </div>
    );
};

export default AdminProductsPage;
