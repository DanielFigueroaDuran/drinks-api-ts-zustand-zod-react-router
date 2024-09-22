import axios from "axios";
import { CategoriesApiResponseShema } from "../utils/recipes-shema";

export const getCategories = async () => {
      const url = 'http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      const { data } = await axios(url);
      const result = CategoriesApiResponseShema.safeParse(data)
      //console.log(result);
      if (result.success) {
            return result.data
      }
};