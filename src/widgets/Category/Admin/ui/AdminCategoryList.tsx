import cls from "./AdminCategoryList.module.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import { AdminCategory } from "features/Category/Admin"
import { AddCategory } from "features/Category/Admin/Add"
import { CategoryType } from "entities/Category/type/CategoryType"

interface ProductListProops {
    className?: string
}

export const AdminCategoryList = ({className}: ProductListProops) => {
    const [categories, setCategories] = useState<CategoryType[]>([])

    const getCallback = (data: CategoryType[]) => { 
        setCategories(data)
    }
    const addCallback = (data: CategoryType) => {
        setCategories(categories => [...categories, data])
    }
    const editCallback = (data: CategoryType) => {
        axios
            .get("http://localhost:3001/categories/"+data.id)
            .then(res => {
                setCategories(categories => categories.map(cat => data.id === cat.id ? res.data : cat))
            })
    }
    const deleteCallback = (id: number) => {
        setCategories(categories => categories.filter(cat => cat.id !== id))
    }
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
        <div className={cls.AdminCategoryList}> 
            <AddCategory addCallback={addCallback}/>

            <div className={cls.titlesContainer}>
                <div className={cls.index}>
                    №
                </div>
                <div className={cls.id}>
                    ID
                </div>
                <div className={cls.img}>
                    Изображение
                </div>
                <div className={cls.name}>
                    Название
                </div>
            </div>

            {categories.map((cardData, index) => (
                <AdminCategory 
                    key={cardData.id}
                    index={index+1}
                    data={cardData}
                    deleteCallback={deleteCallback}
                    editCallback={editCallback}
                />
            ))}
        </div>
    )
}
