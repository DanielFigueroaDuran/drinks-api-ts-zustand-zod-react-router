import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeServices"
import { Categories, Drinks, SearchFilter } from "../types"


export type RecipeSliceType = {
      categories: Categories,
      drinks: Drinks,
      fettchCategories: () => Promise<void>,
      searchRecipes: (searchFilters: SearchFilter) => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipeSliceType> = (set) => ({
      categories: {
            drinks: []
      },

      drinks: {
            drinks: []
      },

      fettchCategories: async () => {
            const categories = await getCategories()
            //console.log(categories);
            set({
                  categories
            })
      },

      searchRecipes: async (filters) => {
            //console.log(filters);

            const drinks = await getRecipes(filters)
            set({
                  drinks
            })
      }
})