import './index.css'
import { FilterContext } from '../../context/FilterContext';
import { Button } from '../Button'
import { useState, useContext, ChangeEvent, FormEvent } from 'react';
import {ReactComponent as LocationIcon } from '../../assets/desktop/icon-location.svg'

interface ModalFilterProps {
  show: boolean
  onClose: () => void
}

export const ModalFilter = ({ onClose, show}:ModalFilterProps) => {
  const [search, setSearch] = useState({
    location: '',
    fullTime: false
  })

  const { filterElements } = useContext(FilterContext)

  const handleCloseModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Verifica si el clic proviene directamente del elemento .container-modal
    if (event.target === event.currentTarget) {
      onClose();
      window.document.body.style.overflow = 'auto'
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value, checked} = e.target
    name === 'fullTime'
      ? setSearch({...search, fullTime: checked})
      : setSearch({...search, [name]:value})
  }

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    filterElements({...search, general: ''})
    window.document.body.style.overflow = 'auto'
    onClose()
  }
  

  return show && (
    <div onClick={handleCloseModal} className='container-modal'>
      <div className='card-modal-filter'>
        <form onSubmit={handleSubmit}>
          <div className='card-modal-filter__input-container'>
            <LocationIcon width={30}/>

            <input
              name='location' 
              onChange={handleChange}
              value={search.location}
              type="text"  
              className='searchBar__input'
              placeholder='Filter by location...'/>
          </div>
          <div className='card-modal-filter__input-container'>
            <input
              name='fullTime' 
              onChange={handleChange}
              checked={search.fullTime}
              className='searchBar__checkbox-icon'
              type="checkbox" 
            />
            <span >Full Time Only</span>
          </div>
          <Button
            colorText='#fff'
            bgColor='var(--violet)'
            text='Search'
            className='card-modal-filter__button'
          />
        </form>
      </div>
    </div>
  )
}
