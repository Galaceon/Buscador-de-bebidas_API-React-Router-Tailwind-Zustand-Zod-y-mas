import type { StateCreator } from "zustand"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Category = {}

export type RecipesSliceType = {
    categories: Category[]
}

export const createRecipeSlice : StateCreator<RecipesSliceType> = () => ({
    categories: []

})