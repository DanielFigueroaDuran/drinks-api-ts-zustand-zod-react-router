import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"

const IndexPage = lazy(() => import('./views/IndexPage'))
const FavoritesPages = lazy(() => import('./views/FavoritesPages'))

const AppRuter = () => {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route element={<Layout />} >
                              <Route path="/" element={
                                    <Suspense fallback='Cargando...'>
                                          <IndexPage />
                                    </Suspense>
                              } index />
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