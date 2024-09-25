import { StateCreator } from "zustand"
import { getCategories, getRecipeId, getRecipes } from "../services/RecipeServices"
import { Categories, Drink, Drinks, SearchFilter } from "../types"
import axios from "axios"


export type RecipeSliceType = {
      categories: Categories,
      drinks: Drinks,
      fettchCategories: () => Promise<void>,
      searchRecipes: (searchFilters: SearchFilter) => Promise<void>,
      selectRecipe: (id: Drink['idDrink']) => Promise<void>
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
      },

      selectRecipe: async (id) => {
            await getRecipeId(id);

      }
})