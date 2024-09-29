import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import Layout from "./layout/Layout"

const FavoritesPages = lazy(() => import('./views/FavoritesPages'))

const AppRuter = () => {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route element={<Layout />} >
                              <Route path="/" element={<IndexPage />} index />
                              <Route path="/favoritos" element={
                                    <Suspense fallback='Cargando...'>
                                          <FavoritesPages />
                                    </Suspense>
                              } />
                        </Route >
                  </Routes>
            </BrowserRouter >
      )
}

export default AppRuter