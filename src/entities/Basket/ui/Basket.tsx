import cls from "./Basket.module.scss"
import { BasketType } from "../type/BasketType"

interface BasketProops {
    className?: string
    data: BasketType
}

export const Basket = ({data}: BasketProops) => {
    const {products, summ} = data
    return (
        <div className={cls.Basket}>
        </div>
    )
}
