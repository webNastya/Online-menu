import { instance } from "shared/api/api.config"

export default class AdminProductsService {
    static get (id?: number) {
        return instance
            .get("/products/" + ( id ?? '' ))
    }
}
