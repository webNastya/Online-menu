import { createContext } from "react";

export interface CategoryContextProps {
    category?: string;
    setCategory?: (category: string) => void;
}

export const CategoryContext = createContext<CategoryContextProps>({})
