import { createContext, useEffect, useState } from 'react'
import { useFetchJobs } from '../hook/useFetchJobs'
import { CompanyEmployment, IFilterElements } from '../models/Company';

interface IFilterProvider {
  children:  JSX.Element[]
} 

interface IFilterContextDefaultValues {
  filter: CompanyEmployment[] 
  loading: boolean
  filterElements: ({location, general, fullTime}:IFilterElements) => void
}
const FilterContextDefaultValues:IFilterContextDefaultValues = {
  filter:[],
  loading: false,
  filterElements: () => {}
}

export const FilterContext = createContext(FilterContextDefaultValues)


export const FilterProvider = ({ children }:IFilterProvider) => {
  const [filter, setFilter] = useState<CompanyEmployment[]>([])
  const { companyEmploymentData, loading } = useFetchJobs()

  useEffect(() => {
    if(companyEmploymentData){
      setFilter(companyEmploymentData)
    }
  }, [companyEmploymentData])

  const filterByFullTime = () => {
    const fullTimeJob = companyEmploymentData?.filter(job => job.contract === 'Full Time')
    return fullTimeJob ?? []
  }

  const filterByLocation = (location:string) => {
    const filterBylocationJob = companyEmploymentData?.filter(job => 
      job.location.toLowerCase().includes(location))
    return filterBylocationJob ?? []
  }

  const filterByLocationAndFullTime = (location:string) => {
    const locationAndFullTime = companyEmploymentData?.filter(job => 
        job.location.toLowerCase() === location
        && job.contract === 'Full Time')

    return locationAndFullTime ?? []
  }
  
  const filterGeneral = (textGeneral:string, dataFiltered: CompanyEmployment[]) => {
    const generalFilter = dataFiltered.filter(job => {
        const expertise = job.requirements.items

        const matchExpertise = expertise.some(exp => exp.toLowerCase().includes(textGeneral))
        const matchNameJob = job.position.toLowerCase().includes(textGeneral)
        const matchCompany = job.position.toLowerCase().includes(textGeneral)

        return matchExpertise || matchNameJob || matchCompany 
    })

    return generalFilter ?? []
  }



  const filterElements = ({location, general, fullTime}:IFilterElements) => {

    const locationTrim  = location.replace(/\s+/g, ' ').trim().toLowerCase()
    const textGeneral  = general.replace(/\s+/g, ' ').trim().toLowerCase()

    if(companyEmploymentData){
      //filtrado por tiempo completo sin importar ubicación o busqueda general
      if (location.trim() === '' && general.trim() === '' && fullTime){
       setFilter(filterByFullTime())
       return
      }

      //filtrado por solo una ubicación
      if(!fullTime && locationTrim !== '' && textGeneral === ''){
        setFilter(filterByLocation(locationTrim))
        return
      }

      //filtrar por ubicación y tiempo completo
      if(fullTime && locationTrim !== '' && textGeneral === ''){
        setFilter(filterByLocationAndFullTime(locationTrim))
        return
      }

      // filtrado por experiencia, nombre de empleo, nombre de compañía sin ubicación o tiempo completo
      if(textGeneral !== '' && locationTrim === '' && !fullTime){
        setFilter(filterGeneral(textGeneral, companyEmploymentData))
        return
      }

      //filtar por por experiencia, nombre de empleo, nombre de compañía y ubicación
      if(locationTrim !== '' && textGeneral !== '' && !fullTime){
        const matchLocation =  filterByLocation(locationTrim)
        const noFullTime = matchLocation.filter(job => job.contract !== 'Full Time')
        
        setFilter(filterGeneral(textGeneral, noFullTime))
        return
      }

      //filtar por por experiencia, nombre de empleo, nombre de compañía y tiempo completo
      if(textGeneral !== '' && fullTime && locationTrim === ''){
        const matchLocation =  filterByFullTime()
        setFilter(filterGeneral(textGeneral, matchLocation))
        return
      }

      // filtrar por todos los campos existentes
      if(locationTrim !== '' && textGeneral !== '' && fullTime){
        const matchLocationAndFullTime =  filterByLocationAndFullTime(locationTrim)
        setFilter(filterGeneral(textGeneral, matchLocationAndFullTime))
        return
      }


    }


  }


  return (
    <FilterContext.Provider value={{
      filter,
      loading,
      filterElements
    }}>
      {children}
    </FilterContext.Provider>
  )
}