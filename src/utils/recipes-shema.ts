import { string, z } from "zod";

export const CategoriesApiResponseShema = z.object({
      drinks: z.array(
            z.object({
                  strCategory: string()
            }))
})