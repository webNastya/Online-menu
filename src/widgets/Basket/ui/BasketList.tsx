import cls from "./BasketList.module.scss"
import { useEffect } from "react"
import axios from "axios"
import { useBasket } from "entities/Basket/hook/useBasket"
import { ProductBasket } from "entities/Product/Basket"
import { Button, ThemeButton } from "shared/ui/Button"


export const BasketList = () => {
    const { basket } = useBasket()

    useEffect(()=>{
        axios
            .get("http://localhost:3001/products")
            .then(res => {
                // setCards(res.data)
            })
    }, [])

    return (
        <div className={cls.BasketList}>
            <div className={cls.products}>
                { basket.products.map((cardData) => (
                    <ProductBasket  className={cls.productBasket}
                        key={cardData.id} 
                        data={cardData}
                    />
                )) }
            </div>
            <div className={cls.total}>
                <div className={cls.twoBlocks}>
                    <div>Итого блюд</div>
                    <div>0</div>
                </div>
                <div className={cls.twoBlocks}>
                    <div>Итого к оплате</div>
                    <div>0</div>
                </div>
                <Button theme={ThemeButton.DEFAULT}>Перейти к оформлению</Button>
            </div>
        </div>
    )
}
