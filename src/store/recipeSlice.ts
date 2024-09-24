import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeServices"
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
            console.log(id);
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            const data = await axios(url);
      }
})