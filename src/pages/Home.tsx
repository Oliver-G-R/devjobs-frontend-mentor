import { GridCardCompany } from "../components/GridCardCompany/GridCardCompany"
import { HeaderJob } from "../components/HeaderJob/HeaderJob"
import { SearchBar } from "../components/SearchBar/SearchBar"
import { FilterProvider } from "../context/FilterContext"

export const Home = () => {
  return (
    <FilterProvider>
      <HeaderJob>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'          
          }}
        > 
          <SearchBar/>
        </div>
      </HeaderJob>
      <main>
        <GridCardCompany/>
      </main>
    </FilterProvider>
  ) 
}
