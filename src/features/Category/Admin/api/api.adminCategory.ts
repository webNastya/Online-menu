import { toFormData } from "axios";
import { CategoryType } from "entities/Category/type/CategoryType";
import { instance } from "shared/api/api.config"

export default class AdminCategoryService {
    static add (data: CategoryType) {
        const formData = toFormData(data)

        return instance
            .post('/categories', formData,
                { headers: {'Content-Type': 'multipart/form-data'}}
            )
    }
    
    static delete(id: number) {
        return instance
            .delete("/categories/" + id)
    }
    
    static edit(data: CategoryType) {
        const formData = toFormData(data)

        return instance
            .patch("/categories/" + data.id,
                formData,
                { headers: {
                    'Content-Type': 'multipart/form-data'
                }}
            )
    }
}
