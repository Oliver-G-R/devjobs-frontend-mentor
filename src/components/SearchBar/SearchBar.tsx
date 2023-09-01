import locationIcon from '../../assets/desktop/icon-location.svg'
import './index.css'
import { Button } from '../Button/Button'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { FilterContext } from '../../context/FilterContext'
import { ReactComponent as SearchIcon } from "../../assets/desktop/icon-search.svg";
import { ReactComponent as FilterIcon } from "../../assets/mobile/icon-filter.svg";
import { ModalFilter } from '../ModalFilter/ModalFilter'

export const SearchBar = () => {
  const [search, setSearch] = useState({
    location: '',
    general: '',
    fullTime: false
  })

  const { filterElements } = useContext(FilterContext)

  const [showModal, setShowModal] = useState(false)

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
  
  const openModal = () => {
    setShowModal(true)
    window.document.body.style.overflow = 'hidden'
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='searchBar'>
        <div className='searchBar__conten-filter'>
          <button type='submit' className='searchBar__button searchBar__button--violet'>
            <SearchIcon className='searchBar__icon-search' />
          </button>
          <button 
            onClick={openModal}
            type='button' 
            className='searchBar__button searchBar__button--hide'>
            <FilterIcon className='searchBar__icon-filter' />
          </button>
          <input
            name='general' 
            type="text"  
            onChange={handleChange}
            value={search.general}
            className='searchBar__input'
            placeholder='Filter by title, companies, expertise...'/>
        </div>
        <div className='searchBar__conten-filter searchBar__conten-filter--hide'>
          <img  src={locationIcon} alt="" />
          <input
            name='location' 
            onChange={handleChange}
            value={search.location}
            type="text"  
            className='searchBar__input'
            placeholder='Filter by location...'/>
        </div>
        <div className='searchBar__conten-filter searchBar__conten-filter--hide'>
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
          className='searchBar__button'
         />
        </div>
      </form>
      <ModalFilter show={showModal} onClose={() => setShowModal(false)} />
     
    </>
  )
}
