import classNames from "classnames"
import cls from "./Category.module.scss"
import { FC } from "react"
import { CategoryType } from "../type/CategoryType"

interface CategoryProops {
    className?: string,
    data: CategoryType,
    onClick: (name: string) => void,
}

export const Category:FC<CategoryProops> = ({className, data, onClick}) => {
    const {id, img, name} = data

    return (
        <div key={id} 
            className={classNames(cls.Category, className)}
            onClick={() => onClick(name)}
        >
            <img className={cls.img} src={`http://localhost:3001/public/${img}`} />
            <div className={cls.name}>{name}</div>
        </div>
    )
}
