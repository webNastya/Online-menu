import cls from "./BasketTotal.module.scss"
import { Button, ThemeButton } from "shared/ui/Button"
import { BasketType } from "entities/Basket/type/BasketType";
import { FC } from "react";
import { ProductType } from "entities/Product/type/ProductType";


interface BasketListProps {
    basket?: BasketType
}

export const BasketTotal:FC<BasketListProps> = ({ basket }) => {
    const totalPrice = basket.products.reduce( (sum: number, p: ProductType) => sum + p.price, 0)

    return (
        <div className={cls.total}>
            <div className={cls.twoBlocks}>
                <div>Итого блюд</div>
                <div>{ basket.products.length }</div>
            </div>
            <div className={cls.twoBlocks}>
                <div>Итого к оплате</div>
                <div>{ totalPrice }</div>
            </div>
            <Button theme={ThemeButton.DEFAULT}>Перейти к оформлению</Button>
        </div>
    )
}
