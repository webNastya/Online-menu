import cls from "./AdminCategoriesList.module.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import { ProductType } from "entities/Product/type/ProductType"
import { AdminCategory } from "features/Category/Admin/ui/AdminCategory"

interface ProductListProops {
    className?: string
}

export const AdminCategoriesList = ({className}: ProductListProops) => {
    const [cards, setCards] = useState<ProductType[]>([])

    const editCallBack = () => {
        // Обновить карточку
    }
    const deleteCallBack = (id: number) => {
        setCards(cards => cards.filter(card => card.id !== id))
    }

    // useEffect(()=>{
    //     axios
    //         .get("http://localhost:3001/categories")
    //         .then(res => {
    //             setCards(res.data)
    //         })
    // }, [])

    return (
        <div className={cls.AdminCategoriesList}> 
            
            {cards.map((cardData, index) => (
                <AdminCategory 
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
