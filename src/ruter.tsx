import { BrowserRouter, Route, Routes } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import FavoritesPages from "./views/FavoritesPages"


const AppRuter = () => {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<IndexPage />} />
                        <Route path="/favoritos" element={<FavoritesPages />} />

                  </Routes>
            </BrowserRouter>
      )
}

export default AppRuter