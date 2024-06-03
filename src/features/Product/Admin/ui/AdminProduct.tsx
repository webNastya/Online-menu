import classNames from "classnames"
import cls from "./AdminProduct.module.scss"
import { EditProduct } from "features/Product/Admin/Edit/ui/EditProduct"
import { DeleteProduct } from "features/Product/Admin/Delete"
import { ProductType } from "entities/Product/type/ProductType"

interface ProductProops {
    index: number,
    className?: string,
    data: ProductType,
    deleteCallback: (id: number) => void
    editCallback: (data: ProductType) => void
}

export const AdminProduct = ({index, className, data, deleteCallback, editCallback}: ProductProops) => {
    const {id, img, title, weight, description, composition, price, category} = data

    return (
        <div className={classNames(cls.AdminProduct, className)}>
            <div className={cls.index}>
                { index }
            </div>
            <div className={cls.id}>
                <b>{ id }</b>
            </div>
            <div className={cls.img}>
                <img src={`http://localhost:3001/public/${img}`}/>
            </div>
            <div className={cls.title}>
                <b>{ title }</b>
            </div>
            <div className={cls.weight}>
                { `${weight} г` }
            </div>
            <div className={cls.composition}>
                { composition }
            </div>
            <div className={cls.price}>
                { `${price} ₽` }
            </div>
            <div className={cls.category}>
                { category.name }
            </div>
            <EditProduct
                data={data}
                editCallback={editCallback}
            />
            <DeleteProduct
                id={id}
                deleteCallback={deleteCallback}
            />
        </div>
    )
}
