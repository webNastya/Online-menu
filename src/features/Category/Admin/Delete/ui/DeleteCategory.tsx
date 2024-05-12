import { Button, ThemeButton } from "shared/ui/Button"
import cls from "./DeleteCategory.module.scss"
import { FC } from "react"
import axios from "axios"
import Delete from "shared/assets/btn-delete.svg"

interface DeleteCategoryProps {
    id: number,
    deleteCallback: (id: number) => void
}

export const DeleteCategory:FC<DeleteCategoryProps> = ({id, deleteCallback}) => {
    const handleDelete = (id: number) => {
        axios
            .delete("http://localhost:3001/categories/"+id)
            .then(res => {
                deleteCallback(id)
            })
            .catch(er => {
                console.log(er)
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
