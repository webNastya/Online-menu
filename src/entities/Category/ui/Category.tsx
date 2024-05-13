import classNames from "classnames"
import cls from "./Category.module.scss"
import { CategoryType } from "../type/CategoryType"

interface CategoryProops {
    className?: string
    data: CategoryType
}

export const Category = ({className, data}: CategoryProops) => {
    const {id, img, name} = data
    return (
        <div className={cls.category}>
            {/* <Pizza className={cls.img} /> */}
            <div>Пицца</div>
        </div>
    )
}
