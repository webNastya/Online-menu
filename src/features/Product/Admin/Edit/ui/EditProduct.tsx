import { FC } from "react"
import axios, { toFormData } from "axios"
import { ProductType } from "entities/Product/type/ProductType"
import Edit from "../../assets/edit.svg"
import cls from "./EditProduct.module.scss"
import { FormProduct } from "widgets/Product/Admin/Form"

interface EditProductProps {
    data: ProductType,
    editCallback: () => void
}

export const EditProduct:FC<EditProductProps> = ({data, editCallback}) => {
    const handleEdit = (data: ProductType) => {
        const formData = toFormData(data)

        axios
            .patch("http://localhost:3001/products/"+data.id, 
                formData,
                { headers: {
                    'Content-Type': 'multipart/form-data'
                }}
            )
            .then(res => {
                editCallback()
            })
            .catch(er => {
                console.log(er)
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
