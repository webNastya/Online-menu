import { ChangeEvent, FC } from "react"
import axios, { toFormData } from "axios"
import cls from "./SelectCategory.module.scss"

interface SelectCategoryProps {
    category: string
    setCategory: (cat: string) => void
}

export const SelectCategory:FC<SelectCategoryProps> = ({category, setCategory}) => {
    const options = [ "Выберите Категорию", "Паста", "Пицца" ]

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const option = +e.target.value
        setCategory(options[option])
	}    

    return(
        <select className={cls.select}
            value={options.findIndex((cat) => cat === category)} 
            onChange={handleSelectChange}
        >
            {options.map((cat, index) => (
                <option key={cat} value={index}>{cat}</option>
            ))}
        </select>
    )
}
