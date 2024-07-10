import cls from "./BasketPage.module.scss"
import { BasketList } from "widgets/Basket";
import { useBasket } from "entities/Basket/hook/useBasket";
import { BasketTotal } from "widgets/Basket/ui/BasketTotal";

const BasketPage = () => {
    const { basket } = useBasket()

    return (
        <div className={cls.BasketPage}>
            <BasketList basket={basket} />
            <BasketTotal basket={basket} />
        </div>
    );
};

export default BasketPage;
