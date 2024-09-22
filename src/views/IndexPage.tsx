import { useAppStore } from "../store/useAppStore"

const IndexPage = () => {
      const { categories } = useAppStore();

      return (
            <>
                  <h1>Inicio</h1>
            </>
      )
}

export default IndexPage