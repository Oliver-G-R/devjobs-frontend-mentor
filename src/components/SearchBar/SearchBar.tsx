import FilterIcon from '../../assets/desktop/icon-search.svg'
import locationIcon from '../../assets/desktop/icon-location.svg'
import './index.css'
import { Button } from '../Button/Button'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { FilterContext } from '../../context/FilterContext'

export const SearchBar = () => {
  const [search, setSearch] = useState({
    location: '',
    general: '',
    fullTime: false
  })

  const { filterElements } = useContext(FilterContext)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value, checked} = e.target
    name === 'fullTime'
      ? setSearch({...search, fullTime: checked})
      : setSearch({...search, [name]:value})
  }

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    filterElements(search)
  }
  
  return (
    <form onSubmit={handleSubmit} className='searchBar global-container'>
      <div className='searchBar__conten-filter'>
        <img  src={FilterIcon} alt="" />
        <input
          name='general' 
          type="text"  
          onChange={handleChange}
          value={search.general}
          className='searchBar__input'
          placeholder='Filter by title, companies, expertise...'/>
      </div>
      <div className='searchBar__conten-filter'>
        <img  src={locationIcon} alt="" />
        <input
          name='location' 
          onChange={handleChange}
          value={search.location}
          type="text"  
          className='searchBar__input'
          placeholder='Filter by location...'/>
      </div>
      <div className='searchBar__conten-filter'>
          <input
            name='fullTime' 
            onChange={handleChange}
            checked={search.fullTime}
            className='searchBar__checkbox-icon'
            type="checkbox" 
           />
        <span >Full Time Only</span>
       <Button
        colorText='#fff'
        bgColor='var(--violet)'
        text='Search'
       />
      </div>
    </form>
  )
}
