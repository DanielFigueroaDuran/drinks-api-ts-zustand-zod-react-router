import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeServices"
import { Categories } from "../types"


export type RecipeSliceType = {
      categories: Categories,
      fettchCategories: () => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipeSliceType> = (set) => ({
      categories: {
            drinks: []
      },
      fettchCategories: async () => {
            const categories = await getCategories()
            //console.log(categories);
            set({
                  categories
            })
      }
})