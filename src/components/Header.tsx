import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom"

const Header = () => {
      // const location = useLocation();
      const { pathname } = useLocation();
      const isHome = useMemo(() => pathname === '/', [pathname])
      //console.log(isHome);

      // console.log(location.pathname);
      //console.log(pathname);

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
                              <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
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
                                                placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Café"
                                          />
                                    </div>

                                    <div className="space-y-4">
                                          <label
                                                className="block text-white uppercase font-extrabold text-lg"
                                                htmlFor="categories"
                                          >
                                                Categorias
                                          </label>

                                          <select
                                                className="p-3 w-full rounded-lg focus:outline-none"
                                                name="categories"
                                                id="categories"

                                          >
                                                <option value="">-- Seleccione --</option>

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