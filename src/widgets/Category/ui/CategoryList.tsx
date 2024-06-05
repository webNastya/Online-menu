import cls from "./CategoryList.module.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import { CategoryType } from "entities/Category/type/CategoryType"
import { Category } from "entities/Category"
import { useCategory } from "entities/Category/hook/useCategory"


export const CategoryList = () => {
    const [categories, setCategories] = useState<CategoryType[]>([])
    const { setCategory } = useCategory()

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
        <div className={cls.CategoryList}>
            
            {categories.map((catData) => (
                <Category 
                    key={catData.id}
                    data={catData}
                    onClick={setCategory}
                />
            ))}
        </div>
    )
}
