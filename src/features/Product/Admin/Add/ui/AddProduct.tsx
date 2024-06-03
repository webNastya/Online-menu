import { FormProduct } from "features/Product/Admin/Form"
import AdminProductService from "../../api/api.adminProduct"
import { FC } from "react"
import { ProductType } from "entities/Product/type/ProductType"

const data = new ProductType()

interface IProps {
    addCallback: (data: ProductType) => void
}

export const AddProduct:FC<IProps> = ({ addCallback }) => {
    const handleAdd = (data: ProductType) => {
        AdminProductService.add(data)
            .then((res) => {
                addCallback(res.data)
            })
    }

    return(
        <FormProduct
            data={data}
            onSubmit={ handleAdd }
            mainBtnBody="Добавить продукт"
            submitBtnText="Cоздать"
        />
    )
}
