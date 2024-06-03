import { ProductList } from 'widgets/Product';
import cls from "./MainPage.module.scss"
import { CategoryList } from 'widgets/Category';

const MainPage = () => {
    return (
        <div className={cls.content}>
            <CategoryList />
            <ProductList />
        </div>
    );
};

export default MainPage;
