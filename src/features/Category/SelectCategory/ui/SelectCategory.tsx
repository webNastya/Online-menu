import { ChangeEvent, FC } from "react"
import axios, { toFormData } from "axios"
import cls from "./SelectCategory.module.scss"

interface SelectCategoryProps {
    category: string
    setCategory: (cat: string) => void
}

export const SelectCategory:FC<SelectCategoryProps> = ({category, setCategory}) => {
    // const handleEdit = (data: ProductType) => {
        // const formData = toFormData(data)

        // axios
        //     .patch("http://localhost:3001/products/"+data.id, 
        //         formData,
        //         { headers: {
        //             'Content-Type': 'multipart/form-data'
        //         }}
        //     )
        //     .then(res => {
        //         editCallback()
        //     })
        //     .catch(er => {
        //         console.log(er)
        //     })
    // }
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
                <option value={index}>{cat}</option>
            ))}
        </select>
    )
}
