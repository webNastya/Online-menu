export class ProductType {
    id: number;
    img: string | File;
    title: string;
    weight: number;
    description: string;
    composition: string;
    price: number;
    constructor() {
        this.id = 0;
        this.img = "";
        this.title = "";
        this.weight = 0;
        this.description = "";
        this.composition = "";
        this.price = 0;
    }
}
