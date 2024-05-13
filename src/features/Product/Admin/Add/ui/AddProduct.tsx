import { FormProduct } from "features/Product/Admin/Form"
import { ProductType } from "entities/Product/type/ProductType"
import AdminProductService from "../../api/api.adminProduct"

const data = new ProductType()

export const AddProduct = () => {
    const handleAdd = (data: ProductType) => {
        AdminProductService.add(data)
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
