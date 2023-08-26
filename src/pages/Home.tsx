import { GridCardCompany } from "../components/GridCardCompany/GridCardCompany"
import { HeaderJob } from "../components/HeaderJob/HeaderJob"

export const Home = () => {
  return (
    <>
      <HeaderJob/>
      <main>
        <GridCardCompany/>
      </main>
    </>
  ) 
}
