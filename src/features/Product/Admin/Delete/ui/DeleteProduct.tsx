import { Button, ThemeButton } from "shared/ui/Button"
import cls from "./DeleteProduct.module.scss"
import { FC } from "react"
import Delete from "shared/assets/btn-delete.svg"
import AdminProductService from "../../api/api.adminProduct"

interface DeleteProductProps {
    id: number,
    deleteCallback: (id: number) => void
}

export const DeleteProduct:FC<DeleteProductProps> = ({id, deleteCallback}) => {
    const handleDelete = (id: number) => {
        AdminProductService.delete(id)
            .then(res => {
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
