import cls from "./BasketList.module.scss"
import { ProductBasket } from "entities/Product/Basket"
import { BasketType } from "entities/Basket/type/BasketType";
import { FC } from "react";


interface BasketListProps {
    basket?: BasketType
}

export const BasketList:FC<BasketListProps> = ({ basket }) => {

    return (
        <div className={cls.products}>
            {basket.products.map((cardData) => (
                <ProductBasket
                               key={cardData.id}
                               data={cardData}
                />
            ))}
        </div>
    )
}
