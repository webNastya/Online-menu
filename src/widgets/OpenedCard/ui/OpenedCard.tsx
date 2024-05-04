import classNames from "classnames"
import cls from "./OpenedCard.module.scss"
import { Button } from "shared/ui/Button"
import btn from "shared/ui/Button/Button.module.scss"
import { OpenedCardType } from "../type/OpenedCard"

interface OpenedCardProops {
    className?: string
    data: OpenedCardType
}


export const OpenedCard = ({className, data}: OpenedCardProops) => {
    const {id, image, title, weight, description, price} = data
    return (
        <div className={classNames(cls.OpenedCard, className)}>
            <img src={data.image} alt=""  className={cls.img}/>
            
            <div className={cls.OpenedCardContainer}>
                <div className={cls.twoBlocks}>
                    <b>{data.title}</b>
                    <div>{data.weight}г</div>
                </div>
                <div>{data.composition}</div>
                <div className={cls.twoBlocks}>
                    <div className={cls.price}>{data.price} ₽</div>
                    <Button className={classNames(cls.Button, btn.clear)}>В корзину</Button>
                </div>
            </div>
        </div>
    )
}
