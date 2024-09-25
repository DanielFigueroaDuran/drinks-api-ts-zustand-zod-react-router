import { StateCreator } from "zustand"
import { getCategories, getRecipeId, getRecipes } from "../services/RecipeServices"
import { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"


export type RecipeSliceType = {
      categories: Categories,
      drinks: Drinks,
      selectedRecipe: Recipe,
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

      selectedRecipe: {} as Recipe,

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
            const selectedRecipe = await getRecipeId(id);
            //console.log(selectedRecipe);
            set({
                  selectedRecipe
            })
      }
})