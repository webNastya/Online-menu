import cls from "./ProductBasket.module.scss"
import { ProductType } from "entities/Product/type/ProductType"

interface IProops {
    className?: string
    data: ProductType
}

export const ProductBasket = ({data}: IProops) => {
    const {id, img, title, weight, description, composition, price, category} = data
    // const {products, summ} = data
    return (
        <div className={cls.ProductBasket}>
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
                </div>
            </div>
        </div>
    )
}
