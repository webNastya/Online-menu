import cls from "./ProductList.module.scss"
import { useState } from "react"
import { ProductType } from "widgets/Product/type/ProductType"
import { Product } from "widgets/Product"

interface ProductListProops {
    className?: string
}

export const ProductList = ({className}: ProductListProops) => {
    const [cards, setCards] = useState<ProductType[]>([{ id: 0,
        image: 'string',
        title: 'string',
        weight: 9,
        description: 'string',
        composition: 'string',
        price: 9}])

    // useEffect(()=>{
    //     axios
    //     .get("https://finalspaceapi.com/api/v0/character/?limit=2")
    //     .then(res => {
    //         setCards(res.data)
    //     });
    // }, [])

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
