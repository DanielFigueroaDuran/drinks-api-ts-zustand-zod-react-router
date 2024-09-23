import { z } from "zod";
import { CategoriesApiResponseShema, SearchFilterSchema } from "../utils/recipes-shema";

export type Categories = z.infer<typeof CategoriesApiResponseShema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>