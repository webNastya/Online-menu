import classNames from "classnames"
import cls from "./Categories.module.scss"
import { useEffect, useState } from "react"
import { CategoryType } from "features/Category/type/CategoryType"
import { Category } from "features/Category"
import axios from "axios"

interface NavBarProops {
    className?: string
}

export const Categories = ({className}: NavBarProops) => {
    const [categories, setCategories] = useState<CategoryType[]>([])

    const getCategories = () => {
        axios
            .get("http://localhost:3001/categories")
            .then(res => {
                setCategories(res.data.sort((a: CategoryType, b: CategoryType) => a.id - b.id))
            })
    }

    useEffect(()=>{
        getCategories()
    }, [])

    return (
        <div className={classNames(cls.Categories, className)}>
            
            {categories.map((catData) => (
                <Category 
                    key={catData.id}
                    data={catData}
                />
            ))}
        </div>
    )
}
