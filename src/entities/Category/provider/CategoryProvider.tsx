import { FC, useMemo, useState } from "react"
import { CategoryContext } from "../context/CategoryContext"


const CategoryProvider: FC = ({ children }) => {
    const [category, setCategory] = useState<string>('')

    const defaultProps = useMemo(() => ({
        category,
        setCategory
    }), [category])

    return (
        <CategoryContext.Provider value={defaultProps}>
            { children }
        </CategoryContext.Provider>
    )
}

export default CategoryProvider
