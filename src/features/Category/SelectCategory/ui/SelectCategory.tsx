import { ChangeEvent, FC, useEffect, useState } from "react"
import axios from "axios"
import cls from "./SelectCategory.module.scss"
import { CategoryType } from "features/Category/type/CategoryType"

interface SelectCategoryProps {
    category: CategoryType
    setCategory: (cat: CategoryType) => void
}

export const SelectCategory:FC<SelectCategoryProps> = ({category, setCategory}) => {
    const [categories, setCategories] = useState<CategoryType[]>()

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const option = +e.target.value
        const category = categories.find((cat) => cat.id === option)
        setCategory(category)
	}

    useEffect(() => {
        axios
            .get("http://localhost:3001/categories")
            .then(({ data }): any => {
                const categories = data.sort((a: CategoryType, b: CategoryType) => a.id - b.id)
                setCategories(categories)

                if (category.id === 0)
                    setCategory(categories[0])
            })
    }, [])

    return(
        <>
            { categories &&
                <select className={cls.select}
                    value={category.id}
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
