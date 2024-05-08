import classNames from 'classnames';
import cls from './AdminProductsPage.module.scss';
import { AdminProductList } from 'widgets/ProductList/Admin';
import { AddProduct } from 'entities/Product/Admin/Add';


const AdminProductsPage = () => {

    return (
        <div className={classNames(cls.AdminProductsPage)}>
            {/* <AddProduct textButtonForm={"Добавить"}/> */}
            <AdminProductList />
        </div>
    );
};

export default AdminProductsPage;
