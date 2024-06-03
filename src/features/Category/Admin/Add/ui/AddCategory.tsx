import { CategoryType } from "entities/Category/type/CategoryType";
import { FormCategory } from "../../Form"
import AdminCategoryService from "../../api/api.adminCategory"
import { FC } from "react"

const data = new CategoryType()

interface IProps {
    addCallback: (data: CategoryType) => void;
}

export const AddCategory:FC<IProps> = ({ addCallback }) => {
    const handleAdd = (data: CategoryType) => {
        AdminCategoryService.add(data)
            .then(res => {
                addCallback(res.data)
            })
    }

    return(
        <FormCategory
            data={data}
            onSubmit={ handleAdd }
            mainBtnBody="Добавить категорию"
            submitBtnText="Cоздать"
        />
    )
}
