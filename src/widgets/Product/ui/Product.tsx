import classNames from "classnames"
import cls from "./Product.module.scss"
import { Button } from "shared/ui/Button"
import btn from "shared/ui/Button/Button.module.scss"
import { ProductType } from "../type/ProductType"

interface ProductProops {
    className?: string
    data: ProductType
}

export const Product = ({className, data}: ProductProops) => {
    const {id, img, title, weight, description, price} = data
    return (
        <div className={classNames(cls.Product, className)}>
            <img src={data.img} alt=""  className={cls.img}/>
            
            <div className={cls.prodContainer}>
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
