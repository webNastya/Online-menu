import { ProductList } from 'widgets/Product';
import cls from "./MainPage.module.scss"
import { CategoryList } from 'widgets/Category';
import CategoryProvider from 'entities/Category/provider/CategoryProvider';

const MainPage = () => {
    return (
        <div className={cls.content}>
            <CategoryProvider>
                <CategoryList />
                <ProductList />
            </CategoryProvider>
        </div>
    );
};

export default MainPage;
