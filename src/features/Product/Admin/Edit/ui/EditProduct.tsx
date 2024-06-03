import { FC } from "react"
import Edit from "shared/assets/btn-edit.svg"
import cls from "./EditProduct.module.scss"
import { FormProduct } from "features/Product/Admin/Form"
import AdminProductService from "../../api/api.adminProduct"
import { ProductType } from "entities/Product/type/ProductType"

interface EditProductProps {
    data: ProductType,
    editCallback: (data: ProductType) => void
}

export const EditProduct:FC<EditProductProps> = ({data, editCallback}) => {
    const handleEdit = (data: ProductType) => {
        AdminProductService.edit(data)
            .then(res => {
                editCallback(data)
            })
    }
    
    return(
        <FormProduct
            data={data}
            onSubmit={ handleEdit }
            mainBtnBody={ <Edit className={cls.svg}/> }
            submitBtnText="Cохранить"
        />
    )
}
