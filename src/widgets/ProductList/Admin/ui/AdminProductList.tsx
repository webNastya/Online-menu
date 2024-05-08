import cls from "./AdminProductList.module.scss"
import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { AdminProduct } from "entities/Product/Admin/ui/AdminProduct"
import { ProductType } from "entities/Product/type/ProductType"
import { AddProduct } from "entities/Product/Admin/Add"
import { Button, ThemeButton } from "shared/ui/Button"

interface ProductListProops {
    className?: string
}

export const AdminProductList = ({className}: ProductListProops) => {
    const [isPopupActive, setIsPopupActive] = useState<boolean>(true)
    const [cards, setCards] = useState<ProductType[]>([])

    const handlerOpenPopap = () => {
        setIsPopupActive(active => !active)
    }
    
    const handleEdit = useCallback((id: number) => {
        axios
            .patch("http://localhost:3001/products/"+id)
            .then(res => {
            })
            .catch(er => {
                console.log(er)
            })
    }, [cards])
    
    const handleDelete = useCallback((id: number) => {
        axios
            .delete("http://localhost:3001/products/"+id)
            .then(res => {
                setCards(cards.filter(card => card.id !== id))
            })
            .catch(er => {
                console.log(er)
            })
    }, [cards])

    useEffect(()=>{
        axios
            .get("http://localhost:3001/products")
            .then(res => {
                setCards(res.data)
            })
    }, [])

    return (
        <div className={cls.AdminProductList}>
            <AddProduct
                textButtonForm={"Сохранить"}
                handlerOpenPopap={handlerOpenPopap}
                isPopupActive={isPopupActive}
            />

            <Button theme={ThemeButton.DEFAULT} onClick={handlerOpenPopap}>
                Добавить продукт
            </Button>

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
            </div>
            {cards.map((cardData, index) => (
                <AdminProduct 
                    key={cardData.id}
                    index={index+1}
                    data={cardData}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    )
}
