import { toFormData } from "axios";
import { ProductType } from "features/Product/type/ProductType";
import { instance } from "shared/api/api.config"

export default class AdminProductService {
    static add (data: ProductType) {
        const formData = toFormData(data)

        return instance
            .post('/products', formData,
                { headers: {'Content-Type': 'multipart/form-data'}}
            )
    }
    
    static delete(id: number) {
        return instance
            .delete("/products/" + id)
    }
    
    static edit(data: ProductType) {
        const formData = toFormData(data)

        return instance
            .patch("/products/" + data.id,
                formData,
                { headers: {
                    'Content-Type': 'multipart/form-data'
                }}
            )
    }
}
