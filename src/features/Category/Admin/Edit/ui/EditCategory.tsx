import { FC } from "react"
import axios, { toFormData } from "axios"
import Edit from "shared/assets/btn-edit.svg"
import cls from "./EditCategory.module.scss"
import { CategoryType } from "entities/Category/type/CategoryType"
import { FormCategory } from "../../Form"

interface EditCategoryProps {
    data: CategoryType,
    editCallback: () => void
}

export const EditCategory:FC<EditCategoryProps> = ({data, editCallback}) => {
    const handleEdit = (data: CategoryType) => {
        const formData = toFormData(data)

        axios
            .patch("http://localhost:3001/categories/"+data.id, 
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
        <FormCategory
            data={data}
            onSubmit={ handleEdit }
            mainBtnBody={ <Edit className={cls.svg}/> }
            submitBtnText="Cохранить"
        />
    )
}
