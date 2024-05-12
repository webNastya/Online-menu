import cls from "./AdminProductList.module.scss"
import { useCallback, useEffect, useState } from "react"
import axios, { toFormData } from "axios"
import { AdminProduct } from "features/Product/Admin/ui/AdminProduct"
import { ProductType } from "entities/Product/type/ProductType"
import { AddProduct } from "features/Product/Admin/Add"
import { Button, ThemeButton } from "shared/ui/Button"

interface ProductListProops {
    className?: string
}

export const AdminProductList = ({className}: ProductListProops) => {
    const [cards, setCards] = useState<ProductType[]>([])

    const editCallBack = () => {
        // Обновить карточку
    }
    const deleteCallBack = (id: number) => {
        setCards(cards => cards.filter(card => card.id !== id))
    }

    useEffect(()=>{
        axios
            .get("http://localhost:3001/products")
            .then(res => {
                setCards(res.data)
            })
    }, [])

    return (
        <div className={cls.AdminProductList}>
            <AddProduct/>

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
                <div className={cls.title}>
                    Название
                </div>
                <div className={cls.weight}>
                    Вес
                </div>
                <div className={cls.composition}>
                    Состав
                </div>
                <div className={cls.price}>
                    Цена
                </div>
                <div className={cls.category}>
                    Категория
                </div>
            </div>
            {cards.map((cardData, index) => (
                <AdminProduct 
                    key={cardData.id}
                    index={index+1}
                    data={cardData}
                    deleteCallback={deleteCallBack}
                    editCallback={editCallBack}
                />
            ))}
        </div>
    )
}
