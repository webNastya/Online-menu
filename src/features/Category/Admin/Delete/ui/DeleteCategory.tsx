import { Button, ThemeButton } from "shared/ui/Button"
import cls from "./DeleteCategory.module.scss"
import { FC } from "react"
import Delete from "shared/assets/btn-delete.svg"
import AdminCategoryService from "../../api/api.adminCategory"

interface DeleteCategoryProps {
    id: number,
    deleteCallback: (id: number) => void
}

export const DeleteCategory:FC<DeleteCategoryProps> = ({id, deleteCallback}) => {
    const handleDelete = (id: number) => {
        AdminCategoryService.delete(id)
            .then(() => {
                deleteCallback(id)
            })
    }

    return(
        <Button
            theme={ThemeButton.DEFAULT} 
            onClick={() => handleDelete(id)}>
            <Delete className={cls.svg}/>
        </Button>
    )
}
