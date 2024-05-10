import axios, { toFormData } from "axios"
import { FormProduct } from "widgets/Product/Admin/Form"
import { ProductType } from "entities/Product/type/ProductType"

const data = new ProductType()

export const AddProduct = () => {
    const handleAdd = (data: ProductType) => {
        let formData = toFormData(data)

        axios
            .post('http://localhost:3001/products', formData,
                { headers: {'Content-Type': 'multipart/form-data'}}
            )
            .catch(err => {
                console.log(err);
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
