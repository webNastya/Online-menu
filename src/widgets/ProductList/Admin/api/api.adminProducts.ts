import { instance } from "shared/api/api.config"

export default class AdminProductsService {
    static get () {
        return instance
            .get("/products")
    }
}
