import { FC, useEffect, useMemo, useState } from "react"
import { COOKIE_BASKET_KEY, BasketContext } from "../context/BasketContext"
import { BasketType } from "../type/BasketType"
import { useCookies } from "react-cookie";


const BasketProvider: FC = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies([COOKIE_BASKET_KEY])

    const [basket, setBasket] = useState<BasketType>(cookies.basket as BasketType || new BasketType())

    const defaultProps = useMemo(() => ({
        basket,
        setBasket
    }), [basket])

    useEffect(() => {
        setCookie(COOKIE_BASKET_KEY, basket)
    }, [basket])

    return (
        <BasketContext.Provider value={defaultProps}>
            { children }
        </BasketContext.Provider>
    )
}

export default BasketProvider
