import { useEffect, useState } from "react"
import { AdminProduct } from "features/Product/Admin/ui/AdminProduct"
import { ProductType } from "entities/Product/type/ProductType"
import { AddProduct } from "features/Product/Admin/Add"
import cls from "./AdminProductList.module.scss"
import AdminProductsService from "../api/api.adminProducts"

interface ProductListProops {
    className?: string
}

export const AdminProductList = ({className}: ProductListProops) => {
    const [products, setProducts] = useState<ProductType[]>([])

    const addCallback = (data: ProductType) => {
        setProducts(products => [...products, data])
    }
    const editCallBack = (data: ProductType) => {
        AdminProductsService.get(data.id)
            .then(res => {
                setProducts(products => products.map(prod => data.id === prod.id ? res.data : prod))
            })
    }
    const deleteCallBack = (id: number) => {
        setProducts(products => products.filter(card => card.id !== id))
    }

    useEffect(()=>{
        AdminProductsService.get()
            .then(res => {
                setProducts(res.data)
            })
    }, [])

    return (
        <div className={cls.AdminProductList}>
            <AddProduct addCallback={ addCallback }/>

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
            {products.map((cardData, index) => (
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
