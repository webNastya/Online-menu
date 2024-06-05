import { useContext } from "react"
import { CategoryContext } from "../context/CategoryContext"

interface UseCategoryResult {
    category: string;
    setCategory: (category: string) => void;
}

export function useCategory(): UseCategoryResult {
    const {category, setCategory} = useContext(CategoryContext)

    return {
        category,
        setCategory,
    }
}
