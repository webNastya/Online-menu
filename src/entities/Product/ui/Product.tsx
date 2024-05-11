import classNames from "classnames"
import cls from "./Product.module.scss"
import { Button, ThemeButton } from "shared/ui/Button"
import { ProductType } from "../type/ProductType"

interface ProductProops {
    className?: string
    data: ProductType
}

export const Product = ({className, data}: ProductProops) => {
    const {id, img, title, weight, description, composition, price, category} = data
    return (
        <div className={classNames(cls.Product, className)}>
            <img src={`http://localhost:3001/public/${img}`} className={cls.img}/>
            
            <div className={cls.prodContainer}>
                <div className={cls.twoBlocks}>
                    <b>{title}</b>
                    <div>{`${weight}г`}</div>
                </div>
                <div>
                    {composition}
                </div>
                <div className={cls.twoBlocks}>
                    <div className={cls.price}>
                        {`${price} ₽`}
                    </div>
                    <Button theme={ThemeButton.DEFAULT}>В корзину</Button>
                </div>
            </div>
        </div>
    )
}
