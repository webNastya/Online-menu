import { ProductType } from "entities/Product/type/ProductType";

export class BasketType {
    products: ProductType[];
    summ: number;
    constructor() {
        this.products = [];
        this.summ = 0;
    }
}
