import axios from "axios";
import { CategoriesApiResponseShema, DrinksAPIResponse, RecipeAPIResponseSchema } from "../utils/recipes-shema";
import { Drink, SearchFilter } from "../types";

export const getCategories = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

      const { data } = await axios(url);
      const result = CategoriesApiResponseShema.safeParse(data)
      //console.log(result);
      if (result.success) {
            return result.data
      }
};

export const getRecipes = async (filters: SearchFilter) => {
      //console.log(filters);
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
      const { data } = await axios(url);
      const result = DrinksAPIResponse.safeParse(data);
      //console.log(result);
      if (result.success) {
            return result.data
      }
};

export const getRecipeId = async (id: Drink['idDrink']) => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      const { data } = await axios(url);
      // console.log(data);
      const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
      console.log(result);

      if (result.success) {
            return data
      };
};