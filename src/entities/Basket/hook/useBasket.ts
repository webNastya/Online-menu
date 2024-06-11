import { useContext } from "react"
import { BasketContext } from "../context/BasketContext"
import { BasketType } from "../type/BasketType";
import { ProductType } from "entities/Product/type/ProductType";

interface UseBasketResult {
    basket: BasketType;
    updateBasket: (product: ProductType) => void;
    isProductInside: (product: ProductType) => boolean;
}

export function useBasket(): UseBasketResult {
    const {basket, setBasket} = useContext(BasketContext)

    const isProductInside = (product: ProductType) => {
        let isProductInside = false

        basket.products.forEach( p => {
            if (p.id === product.id)
                isProductInside = true
        })

        return isProductInside
    }

    const updateBasket = (product: ProductType) => {
        if (isProductInside(product))
            setBasket({...basket,
                products: basket.products.filter( p => p.id !== product.id )
            })
        else
            setBasket({...basket,
                products: [...basket.products, product]
            })
    }

    return {
        basket,
        updateBasket,
        isProductInside
    }
}
