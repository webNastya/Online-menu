import { ProductList } from 'widgets/ProductList';
import { Categories } from 'widgets/Categories';
import cls from "./MainPage.module.scss"

const MainPage = () => {
    return (
        <div className={cls.content}>
            <Categories />
            <ProductList />
        </div>
    );
};

export default MainPage;
