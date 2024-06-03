import { FC } from "react"
import { ProductType } from "features/Product/type/ProductType"
import Edit from "shared/assets/btn-edit.svg"
import cls from "./EditProduct.module.scss"
import { FormProduct } from "features/Product/Admin/Form"
import AdminProductService from "../../api/api.adminProduct"

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
