import { z } from "zod";
import { CategoriesApiResponseShema } from "../utils/recipes-shema";

export type Categories = z.infer<typeof CategoriesApiResponseShema>