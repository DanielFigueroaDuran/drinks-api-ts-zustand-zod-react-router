import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../store/useAppStore";

const Header = () => {
      const [searchFilters, setSearchFilters] = useState({
            ingredient: '',
            category: ''
      });
      // const location = useLocation();
      const { pathname } = useLocation();
      const isHome = useMemo(() => pathname === '/', [pathname]);
      const { fettchCategories, categories, searchRecipes, showNotification } = useAppStore();
      //console.log(categories);
      //console.log(isHome);

      // console.log(location.pathname);
      //console.log(pathname);

      useEffect(() => {
            fettchCategories()
      }, []);

      const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
            setSearchFilters({
                  ...searchFilters,
                  [event.target.name]: event.target.value
            })
      }

      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            //validate            
            if (Object.values(searchFilters).includes('')) {
                  showNotification({
                        text: 'Todos los campos son obligatorios',
                        error: true
                  })

                  return
            };

            //check the recipes
            searchRecipes(searchFilters);
      }

      return (
            <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
                  <div className="mx-auto container px-5 py-16">
                        <div className="flex justify-between items-center">
                              <div>
                                    <img className="w-32" src="/logo.svg" alt="logo" />
                              </div>

                              <nav className="flex gap-4 ">
                                    <NavLink
                                          to="/"
                                          className={({ isActive }) =>
                                                isActive ? ' text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                                          }
                                    >
                                          Inicio
                                    </NavLink>
                                    <NavLink
                                          to="/favoritos"
                                          className={({ isActive }) =>
                                                isActive ? ' text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                                          }
                                    >
                                          Favotitos
                                    </NavLink>
                              </nav>
                        </div>

                        {isHome && (
                              <form
                                    className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
                                    onSubmit={handleSubmit}
                              >
                                    <div className="space-y-4">
                                          <label
                                                className="block text-white uppercase font-extrabold text-lg"
                                                htmlFor="ingredient"
                                          >
                                                Nobre o Ingredientes
                                          </label>

                                          <input
                                                className="p-3 w-full rounded-lg focus:outline-none"
                                                type="text"
                                                name="ingredient"
                                                id="ingredient"
                                                onChange={handleChange}
                                                value={searchFilters.ingredient}
                                                placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Café"
                                          />
                                    </div>

                                    <div className="space-y-4">
                                          <label
                                                className="block text-white uppercase font-extrabold text-lg"
                                                htmlFor="category"
                                          >
                                                Categorias
                                          </label>

                                          <select
                                                className="p-3 w-full rounded-lg focus:outline-none"
                                                name="category"
                                                id="category"
                                                onChange={handleChange}
                                                value={searchFilters.category}
                                          >
                                                <option value="">-- Seleccione --</option>
                                                {categories.drinks.map(categorie => (
                                                      <option
                                                            key={categorie.strCategory}
                                                            value={categorie.strCategory}
                                                      >
                                                            {categorie.strCategory}
                                                      </option>
                                                ))
                                                }

                                          </select>
                                    </div>
                                    <input
                                          className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white 
                                    font-extrabold w-full p-2 rounded-lg uppercase"
                                          type="submit"
                                          value="Buscar Resetas"
                                    />
                              </form>
                        )}
                  </div>
            </header>
      )
}

export default Header