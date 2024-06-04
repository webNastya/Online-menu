import { createContext } from "react";
import { BasketType } from "../type/BasketType";

export interface BasketContextProps {
    basket?: BasketType;
    setBasket?: (basket: BasketType) => void;
}

export const BasketContext = createContext<BasketContextProps>({})

export const COOKIE_BASKET_KEY = "basket"
