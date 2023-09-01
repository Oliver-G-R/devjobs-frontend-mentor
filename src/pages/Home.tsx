import { GridCardCompany } from "../components/GridCardCompany/GridCardCompany"
import { HeaderJob } from "../components/HeaderJob/HeaderJob"
import { ModalFilter } from "../components/ModalFilter/ModalFilter"
import { SearchBar } from "../components/SearchBar/SearchBar"
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
