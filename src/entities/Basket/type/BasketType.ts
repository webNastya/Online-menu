import { ProductType } from "entities/Product/type/ProductType";

export class BasketType {
    products: ProductType[];
    constructor() {
        this.products = [];
    }
}
