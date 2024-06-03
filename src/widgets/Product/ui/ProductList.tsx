import cls from "./ProductList.module.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import { ProductType } from "entities/Product/type/ProductType"
import { Product } from "entities/Product"


export const ProductList = () => {
    const [cards, setCards] = useState<ProductType[]>([])

    useEffect(()=>{
        axios
            .get("http://localhost:3001/products")
            .then(res => {
                setCards(res.data)
            })
    }, [])

    return (
        <div className={cls.ProductList}>
            {cards.map((cardData) => (
                <Product key={cardData.id} 
                    data={cardData}
                />
            ))}
        </div>
    )
}
