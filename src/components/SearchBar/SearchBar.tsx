import FilterIcon from '../../assets/desktop/icon-search.svg'
import locationIcon from '../../assets/desktop/icon-location.svg'
import './index.css'
import { Button } from '../Button/Button'

export const SearchBar = () => {
  return (
    <div className='searchBar global-container'>
      <div className='searchBar__conten-filter'>
        <img  src={FilterIcon} alt="" />
        <input 
          type="text"  
          className='searchBar__input'
          placeholder='Filter by title, companies, expertise...'/>
      </div>
      <div className='searchBar__conten-filter'>
        <img  src={locationIcon} alt="" />
        <input 
          type="text"  
          className='searchBar__input'
          placeholder='Filter by location...'/>
      </div>
      <div className='searchBar__conten-filter'>
          <input 
            className='searchBar__checkbox-icon'
            type="checkbox" 
            name="fullTime" />
        <span >Full Time Only</span>
       <Button
        colorText='#fff'
        bgColor='var(--violet)'
       />
      </div>
     
    </div>
  )
}
