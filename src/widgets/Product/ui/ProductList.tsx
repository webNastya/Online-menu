import cls from "./ProductList.module.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import { ProductType } from "entities/Product/type/ProductType"
import { Product } from "entities/Product"
import { useCategory } from "entities/Category/hook/useCategory"


export const ProductList = () => {
    const [cards, setCards] = useState<ProductType[]>([])
    const { category } = useCategory()

    useEffect(()=>{
        console.log(category);
        
        axios
            .get("http://localhost:3001/products", {params: {category}})
            .then(res => {
                setCards(res.data)
            })
    }, [category])

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
