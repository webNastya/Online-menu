import { ChangeEvent, FC, useEffect, useState } from "react"
import axios from "axios"
import cls from "./SelectCategory.module.scss"
import { CategoryType } from "entities/Category/type/CategoryType"

interface SelectCategoryProps {
    category: string
    setCategory: (cat: string) => void
}

export const SelectCategory:FC<SelectCategoryProps> = ({category, setCategory}) => {
    const [categories, setCategories] = useState<CategoryType[]>()

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const option = +e.target.value
        const category = categories.find((cat) => cat.id === option).name
        setCategory(category)
	}

    useEffect(() => {
        axios
            .get("http://localhost:3001/categories")
            .then(res => {
                setCategories(res.data)
            })
    }, [])

    return(
        <>
            { categories &&
                <select className={cls.select}
                    value={categories.find((cat) => cat.name === category)?.id} 
                    onChange={handleSelectChange}
                >
                    {categories.map((cat, index) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
            }
        </>
    )
}
