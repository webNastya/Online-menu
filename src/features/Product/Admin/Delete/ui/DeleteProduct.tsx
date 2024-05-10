import { Button, ThemeButton } from "shared/ui/Button"
import cls from "./DeleteProduct.module.scss"
import { FC } from "react"
import axios from "axios"
import Delete from "../../assets/delete.svg"

interface DeleteProductProps {
    id: number,
    deleteCallback: (id: number) => void
}

export const DeleteProduct:FC<DeleteProductProps> = ({id, deleteCallback}) => {
    const handleDelete = (id: number) => {
        axios
            .delete("http://localhost:3001/products/"+id)
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
