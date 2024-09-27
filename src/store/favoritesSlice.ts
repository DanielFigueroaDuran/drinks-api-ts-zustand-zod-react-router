import { StateCreator } from "zustand";
import { Recipe } from "../types"

export type FavoritesSliceType = {
      favorites: Recipe[],
      handleClickFavorite: (recipe: Recipe) => void,
      favoriteExists: (id: Recipe['idDrink']) => boolean
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
      favorites: [],
      handleClickFavorite: (recipe) => {
            if (get().favorites.some(favorite => favorite.idDrink === recipe.idDrink)) {
                  //console.log('Si Existe...');
                  set((state) => ({
                        favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
                  }))
            } else {
                  //console.log('No existe...')

                  set((state) => ({
                        favorites: [...state.favorites, recipe]
                  }))
            }
      },

      favoriteExists: (id) => {
            return get().favorites.some(favorite => favorite.idDrink === id)
      }
})