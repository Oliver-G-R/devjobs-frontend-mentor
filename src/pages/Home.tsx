import { GridCardCompany } from "../components/GridCardCompany"
import { HeaderJob } from "../components/HeaderJob"
import { ModalFilter } from "../components/ModalFilter"
import { SearchBar } from "../components/SearchBar"
import { FilterProvider } from "../context/FilterContext"

export const Home = () => {
  return (
    <FilterProvider>
      <HeaderJob>
          <SearchBar/>
      </HeaderJob>
      <main>
        <GridCardCompany/>
      </main>
    </FilterProvider>
  ) 
}
