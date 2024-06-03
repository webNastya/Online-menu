import cls from "./AdminCategoriesList.module.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import { CategoryType } from "features/Category/type/CategoryType"
import { AdminCategory } from "features/Category/Admin"
import { AddCategory } from "features/Category/Admin/Add"

interface ProductListProops {
    className?: string
}

export const AdminCategoriesList = ({className}: ProductListProops) => {
    const [categories, setCategories] = useState<CategoryType[]>([])

    const getCallback = (data: CategoryType[]) => { 
        setCategories(data)
    }
    // получаем все данные нашей категории
    const addCallback = (data: CategoryType) => {
        // при помощи setCategories обновляем состояние categories
        // передаем анонимную функцию для получения текущего состояния categories
        // новую категорию добавляем в конец списка категорий
        // оборачиваем всё в массив, потому что categories лежат в массиве
        setCategories(categories => [...categories, data])
    }
    // получаем все данные нашей категории
    const editCallback = (data: CategoryType) => {
        axios
            // получаем из базы категорию по id
            .get("http://localhost:3001/categories/"+data.id)
            .then(res => {
                // при помощи setCategories обновляем categories
                // через анонимную функцию проходим map-ом по всем категориям
                // если id совпадают заменяем на обновлённые данные о категории из базы
                // все остальные категории остаются без изменений
                setCategories(categories => categories.map(cat => data.id === cat.id ? res.data : cat))
            })
    }
    // получаем id нашей категории
    const deleteCallback = (id: number) => {
        // при помощи setCategories обновляем categories
        // передаем анонимную функцию в метод фильтрации у категорий
        // остаются только категории не равные id нашей категории
        setCategories(categories => categories.filter(cat => cat.id !== id))
    }
    const getCategories = () => {
        axios
            // получаем из базы все категоии
            .get("http://localhost:3001/categories")
            .then(res => {
                // сортируем категории по id от большего к меньшему
                setCategories(res.data.sort((a: CategoryType, b: CategoryType) => a.id - b.id))
            })
    }
    // первичное отображение всех категорий
    useEffect(()=>{
        getCategories()
    }, [])

    return (
        <div className={cls.AdminCategoriesList}> 
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
