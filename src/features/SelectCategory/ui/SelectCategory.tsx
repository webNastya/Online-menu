import { FC, useEffect, useState } from "react"
import axios, { toFormData } from "axios"
import cls from "./SelectCategory.module.scss"

interface SelectCategoryProps {
    category: string
}

export const SelectCategory:FC<SelectCategoryProps> = ({category}) => {
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

    return(
        <select className={cls.select} value={category}>
            {options.map((option, index) => (
                <option value={index}>{option}</option>
            ))}
        </select>
    )
}
