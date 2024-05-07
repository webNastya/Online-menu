import classNames from "classnames"
import cls from "./AdminProduct.module.scss"
import { Button, ThemeButton } from "shared/ui/Button"
import { ProductType } from "../../type/ProductType"

interface ProductProops {
    index: number,
    className?: string,
    data: ProductType,
    handleDelete: (id: number) => void
}

export const AdminProduct = ({index, className, data, handleDelete}: ProductProops) => {
    const {id, img, title, weight, description, composition, price} = data
    return (
        <div className={classNames(cls.AdminProduct, className)}>
            <div className={cls.index}>
                {index}
            </div>
            <div className={cls.id}>
                <b>{id}</b>
            </div>
            <div className={cls.img}>
                <img src={`http://localhost:3001/public/${img}`}/>
            </div>
            <div className={cls.title}>
                <b>{title}</b>
            </div>
            <div className={cls.weight}>
                {`${weight}г`}
            </div>
            <div className={cls.composition}>
                {composition}
            </div>
            <div className={cls.price}>
                {`${price} ₽`}
            </div>
            <Button theme={ThemeButton.DEFAULT} onClick={() => handleDelete(id)}>Удалить</Button>
        </div>
    )
}
