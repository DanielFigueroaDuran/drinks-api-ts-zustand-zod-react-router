import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Modal from "../components/Modal"
import { useEffect } from "react"
import { useAppStore } from "../store/useAppStore"

const Layout = () => {

      const { loadFronStorage, notification } = useAppStore();

      useEffect(() => {
            loadFronStorage()
      }, []);

      return (
            <>
                  <Header />
                  <main className="container mx-auto py-16">
                        <Outlet />
                  </main>
                  <Modal />
            </>
      )
}

export default Layout