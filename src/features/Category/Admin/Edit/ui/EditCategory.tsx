import { FC } from "react"
import Edit from "shared/assets/btn-edit.svg"
import cls from "./EditCategory.module.scss"
import { CategoryType } from "entities/Category/type/CategoryType"
import { FormCategory } from "../../Form"
import AdminCategoryService from "../../api/api.adminCategory"

interface EditCategoryProps {
    data: CategoryType,
    editCallback: (data: CategoryType) => void
}

export const EditCategory:FC<EditCategoryProps> = ({data, editCallback}) => {
    const handleEdit = (data: CategoryType) => {
        AdminCategoryService.edit(data)
            .then(res => {
                console.log(res);
                
                editCallback(res.data)
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
