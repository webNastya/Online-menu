import classNames from "classnames"
import cls from "./AdminCategory.module.scss"
import { CategoryType } from "entities/Category/type/CategoryType"
import { FC } from "react"
import { EditCategory } from "../Edit"
import { DeleteCategory } from "../Delete"

interface CategoryProops {
    index: number,
    className?: string,
    data: CategoryType,
    deleteCallback: (id: number) => void
    editCallback: () => void
}

export const AdminCategory:FC<CategoryProops> = ({index, className, data, deleteCallback, editCallback}) => {
    const {id, img, title} = data

    return (
        <div className={classNames(cls.AdminCategory, className)}>
            <div className={cls.index}>
                {index}
            </div>
            <div className={cls.id}>
                <b>{id}</b>
            </div>
            <div className={cls.img}>
                <img src={`http://localhost:3001/public/${img}`}/>
            </div>
            <div className={cls.title}>
                <b>{title}</b>
            </div>
            
            <EditCategory
                data={data}
                editCallback={editCallback}
            />
            <DeleteCategory
                id={id}
                deleteCallback={deleteCallback}
            />
        </div>
    )
}