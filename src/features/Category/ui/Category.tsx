import classNames from "classnames"
import cls from "./Category.module.scss"
import { CategoryType } from "features/Category/type/CategoryType"
import { FC } from "react"

interface CategoryProops {
    className?: string,
    data: CategoryType
}

export const Category:FC<CategoryProops> = ({className, data}) => {
    const {id, img, name} = data

    return (
        <div key={id} className={classNames(cls.Category, className)}>
            <img className={cls.img} src={`http://localhost:3001/public/${img}`} />
            <div className={cls.name}>{name}</div>
        </div>
    )
}
