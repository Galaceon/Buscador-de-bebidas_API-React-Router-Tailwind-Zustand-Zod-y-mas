import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Category = {}

export type RecipesSliceType = {
    categories: Category[]
    fetchCategories: () => Promise<void>
}

export const createRecipeSlice : StateCreator<RecipesSliceType> = () => ({
    categories: [],

    fetchCategories: async () => {
        getCategories()
    }

})