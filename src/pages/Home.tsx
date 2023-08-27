import { GridCardCompany } from "../components/GridCardCompany/GridCardCompany"
import { HeaderJob } from "../components/HeaderJob/HeaderJob"
import { FilterProvider } from "../context/FilterContext"

export const Home = () => {
  return (
    <>
      <FilterProvider>
        <HeaderJob/>
        <main>
          <GridCardCompany/>
        </main>
      </FilterProvider>
    </>
  ) 
}
