import { BrowserRouter, Route, Routes } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import FavoritesPages from "./views/FavoritesPages"
import Layout from "./layout/Layout"


const AppRuter = () => {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route element={<Layout />} >
                              <Route path="/" element={<IndexPage />} index />
                              <Route path="/favoritos" element={<FavoritesPages />} />
                        </Route >
                  </Routes>
            </BrowserRouter >
      )
}

export default AppRuter