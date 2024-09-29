import { StateCreator } from "zustand";
import { Recipe } from "../types"
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";
import { RecipeSliceType } from "./recipeSlice";

export type FavoritesSliceType = {
      favorites: Recipe[],
      handleClickFavorite: (recipe: Recipe) => void,
      favoriteExists: (id: Recipe['idDrink']) => boolean,
      loadFronStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipeSliceType & NotificationSliceType, [],
      [], FavoritesSliceType> = (set, get, api) => ({
            favorites: [],
            handleClickFavorite: (recipe) => {
                  if (get().favoriteExists(recipe.idDrink)) {
                        //console.log('Si Existe...');
                        set((state) => ({
                              favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
                        }))
                        createNotificationSlice(set, get, api).showNotification({ text: 'Se Elimino de Favoritos', error: false })
                  } else {
                        //console.log('No existe...')

                        set((state) => ({
                              favorites: [...state.favorites, recipe]
                        }))
                        createNotificationSlice(set, get, api).showNotification({ text: 'Se Agregó a Favoritos', error: false })

                  }

                  localStorage.setItem('favorites', JSON.stringify(get().favorites))
            },

            favoriteExists: (id) => {
                  return get().favorites.some(favorite => favorite.idDrink === id)
            },

            loadFronStorage: () => {
                  const storedFavorites = localStorage.getItem('favorites');

                  if (storedFavorites) {
                        set({
                              favorites: JSON.parse(storedFavorites)
                        })
                  }
            }
      })